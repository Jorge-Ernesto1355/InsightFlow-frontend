import { Card, Table } from "antd";

import getColumnsOriginalData from "../utils/getColumnsOriginalData";
import getDataSourceOriginalData from "../utils/getDataSourceOriginalData";

interface Props {
  data: any;
}

const OriginalDataTable = ({ data }: Props) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  const columns = getColumnsOriginalData(data);
  const dataSource = getDataSourceOriginalData(data);

  return (
    <Card className="w-full h-full border mt-5 border-gray-200 rounded-lg shadow transition-shadow hover:shadow-lg p-2">
      <span className="text-2xl font-bold font-inter">Original Data</span>
      <p className="text-gray-600 font-medium text-md mt-2 mb-4 font-inter">
        Visualization of the multiples data with asignation of clusters
      </p>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 15 }}
        bordered={false}
        className="custom-ant-table"
        scroll={{ x: true }}
      />
    </Card>
  );
};

export default OriginalDataTable;
