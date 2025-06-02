const ApiKeyInput: React.FC<{
  apiKey: string;
  onChange: (key: string) => void;
}> = ({ apiKey, onChange }) => {
  return (
    <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
      <label
        htmlFor="api-key"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Hugging Face API Key
      </label>
      <input
        id="api-key"
        type="password"
        value={apiKey}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your Hugging Face API key..."
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <p className="text-xs text-gray-600 mt-1">
        Get your API key from{" "}
        <a
          href="https://huggingface.co/settings/tokens"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Hugging Face Settings
        </a>
      </p>
    </div>
  );
};

export default ApiKeyInput;
