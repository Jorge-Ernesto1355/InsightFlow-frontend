import { Learning, User } from "iconoir-react";
import { ChatMessage } from "../types/types";
import CopyIconButton from "./Copy";
import { Flex } from "antd";

import SimpleLoader from "./AILoaderThinking";

const Message: React.FC<{ message: ChatMessage }> = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`flex items-start space-x-2 max-w-3xl ${
          isUser ? "flex-row-reverse space-x-reverse" : "flex-row"
        }`}
      >
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
            isUser
              ? "border border-gray-300"
              : "transparent border border-gray-300"
          }`}
        >
          {isUser ? <User /> : <Learning />}
        </div>
        <div
          className={`rounded-lg px-4 py-2 shadow-sm ${
            isUser
              ? " text-black border border-gray-300"
              : message.error
              ? "bg-red-100 text-red-800 border border-red-200"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {message.error && (
            <div className="flex items-center ">
              <span className="font-semibold">Error</span>
            </div>
          )}
          <p
            className="whitespace-pre-wrap break-words font-inter"
            style={{ margin: 0 }}
          >
            {message.isLoading ? <SimpleLoader /> : message.content}
          </p>
          <Flex className="items-center ">
            {!message.isLoading && !message.error && (<>
              <div className="text-xs opacity-70 ">{message.timestamp}</div>
              {!isUser && <CopyIconButton text={message.content} />}
            </>)}
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Message;
