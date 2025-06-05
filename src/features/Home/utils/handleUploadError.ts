import { message } from "antd";

export const handleUploadError = (file: any) => {
  const fileName = file.name || "Unknown file";

  console.error("Upload error:", { fileName, error: file.error });
  message.error(`${fileName} upload failed`);
};
