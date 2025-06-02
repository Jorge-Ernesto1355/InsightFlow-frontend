import { ArrowUp } from "iconoir-react";
import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled: boolean;
  cancelStream?: () => void;
}

const ChatInput = ({
  onSendMessage,
  disabled,
  cancelStream,
}: ChatInputProps) => {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  useEffect(() => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [disabled]);

  return (
    <div className="flex items-center space-x-2 ">
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
        placeholder="Ask a question about your data..."
        disabled={disabled}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
      <button
        onClick={handleSubmit}
        disabled={!input.trim() && !disabled}
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-300  transition-colors"
      >
        {disabled ? (
          <Loader onClick={() => cancelStream?.()} />
        ) : (
          <ArrowUp className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};
export default ChatInput;
