import { message } from "antd";

interface ServerResponse {
  status: "success" | "error";
  message?: string;
  data?: any;
  processing_time_ms?: number;
}

export const HandleUploadComplete = ({
  file,
  navigate,
  setData,
  setProcessingTime,
}: {
  file: any;
  navigate: any;
  setData: any;
  setProcessingTime: any;
}) => {
  try {
    const serverResponse: ServerResponse = file.response;
    if (!serverResponse) {
      throw new Error("No response received from server");
    }

    if (serverResponse.status === "error") {
      message.error(
        serverResponse.message || "An error occurred during upload."
      );
      return;
    }

    if (serverResponse.status === "success") {
      if (serverResponse.data) setData(serverResponse.data);
      if (serverResponse.processing_time_ms)
        setProcessingTime(serverResponse.processing_time_ms);

      const processingTime = serverResponse.processing_time_ms
        ? ` (${(serverResponse.processing_time_ms / 1000).toFixed(2)}s)`
        : "";

      message.success(`Analysis completed successfully${processingTime}`);
      console.log(serverResponse.data);

      setTimeout(() => {
        navigate("/dashboard/overview", {
          state: {
            analysisData: serverResponse.data,
            processingTime: serverResponse.processing_time_ms,
          },
        });
      }, 1500);
    }
  } catch (error) {
    message.error("Failed to process server response");
  }
};
