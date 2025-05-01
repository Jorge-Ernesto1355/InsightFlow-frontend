import { Database, StatsUpSquare, Upload } from "iconoir-react";

const Navbar = () => {
  return (
    <nav className="w-full px-6  border-b-2 border-gray-200 flex justify-between items-center">
      <div>
      <h2 style={{marginBottom: "0px"}} className="text-2xl font-bold  ">InsightFlow</h2>
      <p className="text-xs text-gray-500 font-medium">CSV Analyzer</p>
      </div>
      <div>
      <ul style={{marginBottom: "0px"}} className="flex gap-6 items-center w-full h-full justify-end">
        <li className="flex justigy-center mt-2 items-center cursor-pointer hover:bg-gray-100 p-2 rounded transition-all duration-200">
        <Upload className="mb-1 text-lg" />
        <p className="text-sm font-medium">Upload</p>
        </li>
        <li className="flex items-center mt-2 cursor-pointer hover:bg-gray-100 p-2 rounded transition-all duration-200">
        <Database className="mb-1 text-lg" />
        <p className="text-sm font-medium">Data View</p>
        </li>
        <li className="flex  items-center mt-2 cursor-pointer hover:bg-gray-100 p-2 rounded transition-all duration-200">
        <StatsUpSquare className="mb-1 text-lg" />
        <p className="text-sm font-medium">AI Analysis</p>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
