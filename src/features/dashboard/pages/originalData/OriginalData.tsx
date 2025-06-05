import React from "react";
import Metadata from "./components/Metadata";
import { mockData } from "../../../../../mockData";
import OriginalDataTable from "./components/OriginalDataTable";
import useStore from "../../../../shared/store/AIStore";

const OriginalData = () => {
  const data = useStore((data) => data.data);
  console.log(data);

  return (
    <div className="p-4">
      <span className="text-3xl font-bold font-inter ">Original Data</span>
      <p className="text-gray-500 font-medium mt-2 mb-4 font-inter">
        Visualization of the original data and metadata
      </p>
      <Metadata metadata={data?.metadata?.column_stats} />
      <OriginalDataTable data={data?.cluster_data || []} />
    </div>
  );
};

export default OriginalData;
