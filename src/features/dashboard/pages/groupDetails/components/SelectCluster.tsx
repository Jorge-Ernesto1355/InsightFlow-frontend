import { Select } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

interface Props {
  options?: Option[];
}

const SelectCluster = ({ options = [] }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleChange = (value: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("cluster", value);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <Select
        defaultValue={options[0].label}
        style={{ width: 150 }}
        onChange={handleChange}
        options={options}
      />
      <span className="text-gray-600  font-inter">
        Select Cluster to see differents values{" "}
      </span>
    </div>
  );
};

export default SelectCluster;
