import { Card } from "antd";
import React from "react";
import SingleClusterChart from "../../../../../shared/components/SingleClusterChart";

const DistributtionGroup = ({ values = [] }: { values: number[] }) => {
  return (
    <Card className="w-full h-full border border-gray-200 rounded-lg shadow transition-shadow hover:shadow-lg p-2">
      <span className="text-2xl font-bold font-inter">
        Distribution of the group
      </span>
      <p className="font-inter text-md text-gray-600">
        Visualization of the distribution of the group selected
      </p>
      <div>
        <SingleClusterChart values={values} />
      </div>
    </Card>
  );
};

export default DistributtionGroup;
