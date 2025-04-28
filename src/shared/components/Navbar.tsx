import { Database, StatsUpSquare, Upload } from "iconoir-react";

const Navbar = () => {
  return (
    <nav className="w-full px-9 p-3 border-b-2 border-gray-200 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold">InsightFlow</h2>
        <p className="text-sm text-gray-600 font-medium">CSV Analyzer</p>
      </div>
      <div>
        <ul className="flex gap-4">
          <li className="flex justify-center items-center cursor-pointer focus:border-2 focus:border-white focus:bg-black focus:text-white p-2 focus:p-2 rounded transition-all duration-200">
            <Upload className="mr-1" />
            <p className="text-md font-medium">Upload</p>
          </li>
          <li className="flex justify-center items-center cursor-pointer focus:border-2 focus:border-white focus:bg-black focus:text-white p-2 focus:p-2 rounded transition-all duration-200">
            <Database />
            <p className="text-md font-medium"> Data View</p>
          </li>
          <li className="flex justify-center items-center cursor-pointer focus:border-2 focus:border-white focus:bg-black focus:text-white p-2 focus:p-2 rounded transition-all duration-200">
            <StatsUpSquare className="mr-1" />
            <p className="text-md font-medium">AI Analysis</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
