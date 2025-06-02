import UploadFile from "./components/UploadFile";

const Home = () => {
  return (
    <div className="w-full  justify-center items-center flex flex-col">
      <section className="pt-5 flex flex-col justify-center items-center w-full">
        <header className="flex flex-col justify-center items-center my-3 space-y-5">
          <h2 className="text-4xl  font-inter font-bold">CSV File Analyser</h2>
          <p className=" text-center max-w-3xl text-gray-500 font-medium">
            Upload your CSV files to analyze patterns and trends using AI. Our
            system will process your data and provide insights
          </p>
        </header>
        <div className="w-1/2 mt-5 flex flex-col justify-center items-center">
          <UploadFile />
        </div>
      </section>
    </div>
  );
};

export default Home;
