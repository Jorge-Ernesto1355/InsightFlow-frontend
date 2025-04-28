import Dragger from "./Dragger";
import SelectFile from "./SelectFile";

const UploadFile = () => {
  return (
    <div className="border-1 h-[400px] rounded-md w-full border-gray-300 p-4  ">
      <h3 className=" font-sans font-bold text-3xl">Upload your CSV file</h3>
      <p className="text-gray-500 font-normal">
        Drag and drop your CSV file or click to browse
      </p>

      <section className="flex justify-center items-center h-52 mt-5">
        <Dragger />
      </section>
      <div className="mt-5">
        <SelectFile />
      </div>
    </div>
  );
};

export default UploadFile;
