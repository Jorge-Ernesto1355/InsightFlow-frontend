import { ArrowUp } from "iconoir-react";
import { useCallback, useEffect, useRef, useState } from "react";
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

  const handleSubmit = useCallback(
    (e: React.FormEvent | React.KeyboardEvent) => {
      e.preventDefault();
      if (input.trim() && !disabled) {
        onSendMessage(input.trim());
        setInput("");
      }
    },
    [input, disabled, onSendMessage]
  );

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
        onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
        placeholder="Ask a question about your data..."
        aria-label="Chat input: Ask a question about your data"
        disabled={disabled}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
      <button
        onClick={disabled ? () => cancelStream?.() : handleSubmit}
        disabled={disabled || !input.trim()}
        type="submit"
        aria-label={disabled ? "Stop generating answer" : "Send message"}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-300  transition-colors"
      >
        {disabled ? <Loader /> : <ArrowUp className="w-5 h-5" />}
      </button>
    </div>
  );
};
export default ChatInput;
