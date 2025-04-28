import { message, UploadProps, Upload } from "antd";
const { Dragger: DraggerAntd } = Upload;

import { Archive, CloudUpload } from "iconoir-react";
import { Navigate, useNavigate } from "react-router-dom";

const Dragger = () => {
  const navigate = useNavigate();

  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "http://localhost:8000/analyze?n_clusters=3",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        if (info.file.response.status === "error") {
          message.error(info.file.response.message);
        }

        if (info.file.response.status === "success") {
          message.success(
            `Analysis Completed Successfully, redirecting to dashboard...`
          );
          navigate("/dashboard");
        }
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    showUploadList: false,
    className: "w-full h-full",
    accept: ".csv",
  };
  return (
    <DraggerAntd {...props}>
      <div className="p-1 rounded-full bg-gray-200 flex justify-center items-center w-16 h-16 mx-auto mb-2">
        <CloudUpload width={40} height={40} />
      </div>
      <h3 className="font-semibold text-xl">Drag & drop your CSV file here </h3>
      <p className="text-gray-400 ">or click to browse files</p>
      <div className="flex justify-center items-center m-2 space-x-2">
        <Archive />
        <p className="text-gray-400 ">Upload CSV file</p>
      </div>
    </DraggerAntd>
  );
};

export default Dragger;
