import { FileSpreadsheet } from "lucide-react";
import Advantages from "./components/Advantages";

import { advantages } from "./utils/Advantage";
import Dragger from "./components/Dragger";
import SelectFile from "./components/SelectFile";
import { Divider } from "antd";

const Home = () => {
  return (
    <div className="w-full  justify-center items-center flex flex-col">
      <header className=" mt-10 flex flex-col w-full justify-center items-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
          <FileSpreadsheet className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-5xl font-inter font-bold text-gray-900 mb-4">
          CSV File Analyser
        </h2>
        <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto ">
          {" "}
          Upload and manage your CSV files with ease, Drag, drop, and process
          your data files in seconds.
        </p>
      </header>
      <section className="pt-5 flex flex-col  items-center m-auto w-full">
        <Advantages advantages={advantages} />
        <div className="w-4/5 mx-auto">
          <Dragger />
          <Divider className="my-5">Or</Divider>
          <SelectFile />
        </div>
      </section>
    </div>
  );
};

export default Home;
