import { Card, Table } from "antd";
import React from "react";

interface Register {
  [key: string]: any;
}

interface Props {
  registers: Register[];
}

const RegistersPerGroup = ({ registers = [] }: Props) => {
  if (!Array.isArray(registers)) {
    return <div>Loading...</div>;
  }

  const dato = registers[0];
  const columns = Object.keys(dato)
    .filter((key) => key !== "key")
    .map((key) => ({
      title: (
        <div className="whitespace-normal text-center text-sm font-medium text-gray-800">
          {key}
        </div>
      ),
      dataIndex: key,
      key,
      render: (text: string) => (
        <div className="text-sm text-center text-gray-800">{text}</div>
      ),
    }));

  return (
    <Card className="w-full h-full border mt-5 border-gray-200 rounded-lg shadow transition-shadow hover:shadow-lg p-2">
      <span className="text-2xl font-bold font-inter">Registers per group</span>
      <p className="text-gray-600 font-medium text-md mt-2 mb-4 font-inter">
        Individuals datos belonging to the group
      </p>
      <div className="overflow-x-auto p-4 bg-white border border-gray-300 rounded-xl">
        <Table
          dataSource={registers}
          columns={columns}
          pagination={false}
          bordered={false}
          className="custom-ant-table"
        />
      </div>
    </Card>
  );
};

export default RegistersPerGroup;
