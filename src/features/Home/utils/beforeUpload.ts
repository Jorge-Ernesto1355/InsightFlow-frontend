import { message } from "antd";
import { uploadConfig } from "../components/Dragger";

interface UploadFile {
  name: string;
  type: string;
  size: number;
}

export const beforeUpload = (file: UploadFile): boolean => {
  const isCsv = file.type === "text/csv" || file.name.endsWith(".csv");
  const isValidSize = file.size <= uploadConfig.maxFileSize;

  if (!isCsv) {
    message.error("Please upload a CSV file only.");
    return false;
  }
  if (!isValidSize) {
    message.error(
      `File size must be less than ${
        uploadConfig.maxFileSize / (1024 * 1024)
      }MB`
    );
    return false;
  }

  return true;
};
