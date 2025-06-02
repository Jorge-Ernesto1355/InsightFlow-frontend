import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChatMessage, ChatStreamOptions } from "../types/types";
import { useCallback, useRef, useState } from "react";
import { InferenceClient } from "@huggingface/inference";

interface huggingFaceStreamProps {
  apiKey: string;
  options?: ChatStreamOptions;
  onChunk?: (chunk: string) => void;
}

export interface StreamResponse {
  fullResponse: string;
  isStreaming: boolean;
  currentChunk: string;
}

export const huggingFaceStream = ({
  apiKey,
  options = {},
  onChunk,
}: huggingFaceStreamProps) => {
  const [streamResponse, setStreamResponse] = useState<StreamResponse>({
    fullResponse: "",
    isStreaming: false,
    currentChunk: "",
  });

  const queryClient = useQueryClient();
  const abnortControllerRef = useRef<AbortController | null>(null);

  const streamingMutation = useMutation({
    mutationFn: async (messages: ChatMessage[]) => {
      if (abnortControllerRef.current) {
        abnortControllerRef.current.abort();
      }

      abnortControllerRef.current = new AbortController();

      const client = new InferenceClient(apiKey);
      let fullResponse = "";

      setStreamResponse((prev) => ({
        ...prev,
        isStreaming: true,
        currentChunk: "",
        fullResponse: "",
      }));

      try {
        const stream = client.chatCompletionStream({
          provider: "hf-inference",
          model: options.model || "HuggingFaceH4/zephyr-7b-beta",
          messages: messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
          temperature: options.temperature || 0.7,
          max_tokens: options.maxTokens || 500,
        });

        for await (const chunk of stream) {
          if (abnortControllerRef.current?.signal.aborted) {
            throw new Error("Request was aborted");
          }

          if (chunk.choices && chunk.choices.length > 0) {
            const newContent = chunk.choices[0].delta.content;
            if (onChunk && newContent) onChunk(newContent);

            if (newContent) {
              fullResponse += newContent;
              setStreamResponse((prev) => ({
                ...prev,
                currentChunk: newContent,
                fullResponse: fullResponse,
              }));
            }
            if (chunk.choices[0].finish_reason) break;
          }
        }

        return {
          content: fullResponse,
          finishedReason: "completed",
        };
      } catch (error) {
        if (error instanceof Error && error.name == "AbortError") {
          throw new Error("Request was aborted by user");
        }
        console.error("Error in streaming mutation:", error);
        throw error;
      } finally {
        setStreamResponse((prev) => ({
          ...prev,
          isStreaming: false,
          currentChunk: "",
        }));
        abnortControllerRef.current = null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chat_messages"] });
    },
    onError: (error) => {
      console.error("Error in huggingFaceStream mutation:", error);
      setStreamResponse((prev) => ({
        ...prev,
        isStreaming: false,
        currentChunk: "",
      }));
    },
  });

  const cancelStream = useCallback(() => {
    if (abnortControllerRef.current) {
      abnortControllerRef.current.abort();
      abnortControllerRef.current = null;
      setStreamResponse((prev) => ({
        ...prev,
        isStreaming: false,
        currentChunk: "",
      }));
      streamingMutation.reset();
    }
  }, [streamingMutation]);

  const sendMessage = useCallback(async (messages: ChatMessage[]) => {
    return streamingMutation.mutate(messages);
  }, []);

  return {
    sendMessage,
    cancelStream,
    streamResponse,
    isLoading: streamingMutation.isPending,
    error: streamingMutation.error,
    isError: streamingMutation.isError,
    isSuccess: streamingMutation.isSuccess,
    reset: streamingMutation.reset,
  };
};
