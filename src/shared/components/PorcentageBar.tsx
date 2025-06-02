import React from "react";

interface PorcentageBarProps {
  value: number;
}

const PorcentageBar = ({ value }: PorcentageBarProps) => {
  return (
    <div className="flex flex-col items-center w-full  p-1">
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default PorcentageBar;
