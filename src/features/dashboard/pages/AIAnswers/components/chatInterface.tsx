import { useCallback, useState } from "react";

import { huggingFaceStream } from "../api/huggingFaceStream";
import { ChatMessage } from "../types/types";
import Message from "./Message";
import ChatInput from "./ChatInput";
import { Card, Col, Flex, message, Row } from "antd";
import { getHoursAndMiutes } from "../utils/getHoursAndMinute";
import { TruckLength } from "iconoir-react";

const INITIAL_MESSAGE_CONTENT =
  "Hi, I'm your data analysis assistant. You can ask me about clusters, patterns, risk factors, or any insights you'd like to uncover in your data.";
const HUGGING_FACE_CONFIG = {
  model: "HuggingFaceH4/zephyr-7b-beta",
  temperature: 0.7,
  maxTokens: 500,
};

const createMessage = (
  role: "user" | "assistant",
  content: string,
  timestamp?: string
): ChatMessage => ({
  id: crypto.randomUUID(),
  role,
  content,
  timestamp: timestamp || getHoursAndMiutes(new Date()),
  error: null,
});

const createInitialMessages = (): ChatMessage[] => [
  createMessage(
    "assistant",
    INITIAL_MESSAGE_CONTENT,
    getHoursAndMiutes(new Date(0))
  ),
];

interface ChatInterfaceProps {
  apiKey: string;
  className?: string;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ apiKey }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    ...createInitialMessages(),
  ]);

  const handleStreamChunk = useCallback((newChunk: string) => {
    setMessages((prev) => {
      const lastMessage = prev[prev.length - 1];

      // Si no hay último mensaje o no es del asistente, crear uno nuevo
      if (!lastMessage || lastMessage.role !== "assistant") {
        const newAssistantMessage = createMessage("assistant", newChunk);
        return [...prev, newAssistantMessage];
      }

      // Actualizar el contenido del último mensaje del asistente
      return [
        ...prev.slice(0, -1),
        { ...lastMessage, content: lastMessage.content + newChunk },
      ];
    });
  }, []);

  const {
    sendMessage,
    cancelStream,

    isLoading,
    error,
    isError,
  } = huggingFaceStream({
    apiKey,
    onChunk: (newChunk) => handleStreamChunk(newChunk),
    options: HUGGING_FACE_CONFIG,
  });

  const handleSendMessage = useCallback(
    async (inputValue: string) => {
      if (!inputValue.trim() || isLoading) return;

      const userMessage: ChatMessage = createMessage("user", inputValue.trim());

      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);

      try {
        await sendMessage(updatedMessages);
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? `Failed to send message: ${err.message}`
            : "Failed to send message";
        message.error(errorMessage);
      }
    },
    [messages, isLoading, sendMessage]
  );

  if (isError && error) {
    message.error(`Error al enviar mensaje: ${error.message}`);
  }
  return (
    <Card
      className={
        "w-full h-full min-h-full border border-gray-200 rounded-lg shadow transition-shadow hover:shadow-lg "
      }
    >
      <Row className="h-full ">
        <Flex className="h-full flex-col w-full">
          <Col span={100} className="w-full ">
            <div className="scrollable h-[calc(100vh-200px)] overflow-y-auto ">
              {messages.map((message) => (
                <Message key={message.id} message={message} />
              ))}
            </div>
          </Col>
          <Col span={100}>
            <ChatInput
              onSendMessage={handleSendMessage}
              disabled={isLoading}
              cancelStream={cancelStream}
            />
          </Col>
        </Flex>
      </Row>
    </Card>
  );
};
