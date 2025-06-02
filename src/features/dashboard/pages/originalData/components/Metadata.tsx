import { Card, Table } from "antd";
import { columnsStats } from "../models/metadata";
import getDataSource from "../utils/getDataSource";
import { ColumnsToMetadata } from "../utils/columnsToMetadata";

interface Props {
  metadata: columnsStats;
}

const Metadata = ({ metadata }: Props) => {
  const dataSource = getDataSource(metadata);

  return (
    <Card>
      <span className="text-2xl font-bold font-inter">Metadata</span>
      <p className="text-gray-600 font-medium text-md  mb-4 font-inter">
        Information of the original data
      </p>

      <Table
        columns={ColumnsToMetadata}
        dataSource={dataSource}
        pagination={{ pageSize: 10 }}
      />
    </Card>
  );
};

export default Metadata;
