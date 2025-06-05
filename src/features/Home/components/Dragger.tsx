import { UploadProps, Upload } from "antd";
const { Dragger: DraggerAntd } = Upload;

import { Archive, CloudUpload } from "iconoir-react";
import { beforeUpload } from "../utils/beforeUpload";
import { handleUploadError } from "../utils/handleUploadError";
import { useNavigate } from "react-router-dom";
import { HandleUploadComplete } from "../utils/HandleUploadComplete";
import useStore from "../../../shared/store/AIStore";

export const uploadConfig = {
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedTypes: [".csv"],
  apiEndpoint: import.meta.env.VITE_API_BACKEND_URL || "http://localhost:8000",
  defaultClusters: 3,
};

const Dragger = () => {
  const navigate = useNavigate();
  const { setData, setProcessingTime } = useStore();
  const props: UploadProps = {
    name: "file",
    multiple: false,
    action: `${uploadConfig.apiEndpoint}/analyze?n_clusters=${uploadConfig.defaultClusters}`,
    beforeUpload: (file) => beforeUpload(file),
    onChange(info) {
      const { status } = info.file;

      if (status === "done")
        HandleUploadComplete({
          file: info.file,
          navigate,
          setData,
          setProcessingTime,
        });

      if (status === "error") handleUploadError(info.file);
    },

    showUploadList: {
      showPreviewIcon: false,
      showRemoveIcon: true,
      showDownloadIcon: false,
    },
    className: "w-full h-full",
    accept: uploadConfig.allowedTypes.join(","),
  };
  return (
    <DraggerAntd {...props}>
      <div className="p-1 rounded-full bg-gray-200 flex justify-center items-center w-16 h-16 mx-auto mb-2">
        <CloudUpload width={40} height={40} />
      </div>
      <h3 className="font-semibold text-xl font-inter">
        Drag & drop your CSV file here{" "}
      </h3>
      <p className="text-gray-500 font-inter ">or click to browse files</p>
      <div className="flex justify-center  m-2 space-x-2">
        <Archive />
        <p className="text-gray-400  font-inter">Only csv file are supported</p>
      </div>
    </DraggerAntd>
  );
};

export default Dragger;
