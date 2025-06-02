import { ClipboardCheck, PasteClipboard } from "iconoir-react";
import { useState } from "react";

const CopyIconButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <button onClick={handleCopy} aria-label="Copiar" className="p-2 mt-1">
      {copied ? (
        // SVG después de copiar
        <ClipboardCheck fontSize={"10px"} className="opacity-70" />
      ) : (
        // SVG original antes de copiar
        <PasteClipboard fontSize={"10px"} className="opacity-70" />
      )}
    </button>
  );
};

export default CopyIconButton;
