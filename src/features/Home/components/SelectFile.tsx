import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";

const props: UploadProps = {
  name: "file",
  action: "",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  className: " flex justify-center items-center w-full",
  accept: ".csv",
};

const SelectFile = () => (
  <Upload {...props}>
    <Button
      className="mt-2 p-5 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 rounded-lg flex items-center justify-center"
      style={{ width: "100%" }}
      icon={<UploadOutlined />}
    >
      <span className="font-inter">Select CSV File</span>
    </Button>
  </Upload>
);

export default SelectFile;
