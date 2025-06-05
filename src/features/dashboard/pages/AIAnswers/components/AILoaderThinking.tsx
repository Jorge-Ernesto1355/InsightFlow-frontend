// components/AILoader.tsx
import React from "react";

const SimpleLoader: React.FC = () => {
    return (
      <div className="flex space-x-1">
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
      </div>
    );
  };
  
  export default SimpleLoader;
