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
    <Button className="mt-5" icon={<UploadOutlined />}>
      Select CSV File
    </Button>
  </Upload>
);

export default SelectFile;
