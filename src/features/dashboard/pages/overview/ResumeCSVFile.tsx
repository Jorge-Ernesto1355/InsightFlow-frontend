import React from "react";
import { Card, Col, Row } from "antd";
import {
  AppleShortcuts,
  Database,
  Group,
  TableRows,
  Timer,
} from "iconoir-react";
import { palletesCollor } from "../../../../resourses/palletesCollor";
import { getAverage } from "./utils/getAverage";

// Reusable Stat Card component
interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  Icon: React.ElementType;
  iconColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  Icon,
  iconColor = palletesCollor.primary,
}) => (
  <Card className="h-32 border border-gray-200 rounded-lg shadow transition-shadow hover:shadow-lg">
    <div className="flex justify-between items-center mb-2">
      <span className="font-inter font-semibold">{title}</span>
      <Icon scale="1.5" color={iconColor} />
    </div>
    <span className="text-2xl font-bold font-inter">{value}</span>
    <p className="text-gray-500 font-medium font-inter text-xs">
      {description}
    </p>
  </Card>
);

const performance = [
  {
    title: "Silhouette Score",
    value: 0.72,
  },
  {
    title: "Davies Bouldin Index",
    value: 0.58,
  },
  {
    title: "Calinski Harabasz Index",
    value: 0.84,
  },
];

const ResumeCSVFile = ({
  clusters,
  metadata,
}: {
  clusters: Record<string, number>;
  metadata: any;
}) => {
  const sizesOfClusters = Object.values(clusters);
  const average = getAverage(sizesOfClusters);
  const totalRecords = sizesOfClusters.reduce((acc, value) => acc + value, 0);

  return (
    <div>
      <span className="text-3xl font-bold font-inter">General vision</span>
      <p className="text-gray-500 font-medium mt-2 mb-4 font-inter">
        This is the overview page where you can see the general information of
        your uploaded CSV file.
      </p>
      <Row gutter={[24, 24]} className="w-full min-h-[400px]">
        <Col xs={24} sm={12} md={8} lg={6} className="flex flex-col space-y-4">
          <StatCard
            title="Number of Clusters"
            value={Object.keys(clusters).length || 0}
            description="Groups Identified in the Analysis"
            Icon={AppleShortcuts}
          />
          <StatCard
            title="Average Size"
            value={Math.floor(average)}
            description="Records per Cluster"
            Icon={Group}
          />
          <StatCard
            title="Total Records"
            value={totalRecords}
            description="In the Dataset"
            Icon={Database}
          />
        </Col>

        <Col xs={24} sm={12} md={10} lg={7}>
          <Card className="h-full rounded-lg  border-gray-200 shadow ">
            <span className="text-2xl font-bold font-inter">
              Processing Summary
            </span>
            <p className="font-inter text-gray-600 mb-6">
              Information about data processing
            </p>
            <Row gutter={[16, 16]} className="w-full mt-2">
              <Col xs={8} className="flex flex-col items-center">
                <div className="flex items-center space-x-2 mb-1">
                  <TableRows scale="1.3" color={palletesCollor.primary} />
                  <span className="font-bold font-inter">Rows</span>
                </div>
                <span className="font-inter font-bold text-2xl">
                  {metadata.final_row_count}
                </span>
              </Col>
              <Col xs={8} className="flex flex-col items-center">
                <span className="font-bold font-inter mb-1">Columns</span>
                <span className="font-bold text-2xl font-inter">
                  {metadata.final_col_count}
                </span>
              </Col>
              <Col xs={8} className="flex flex-col items-center">
                <div className="flex items-center space-x-2 mb-1">
                  <Timer scale="1.3" color={palletesCollor.primary} />
                  <span className="font-bold font-inter">Time</span>
                </div>
                <span className="font-inter font-bold text-2xl">
                  {metadata.time / 1000}ms
                </span>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={24} md={10} lg={7}>
          <Card className="h-full flex flex-col  rounded-lg shadow border-gray-200">
            <span className="text-2xl font-bold font-inter">
              Model Performance
            </span>
            <p className="font-inter text-gray-600 mb-6">
              Clustering evaluation metrics
            </p>
            <div className="flex flex-col   h-full w-full">
              {performance.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center w-full  p-1"
                >
                  <div className="flex justify-between w-full">
                    <span className="font-inter font-semibold text-sm">
                      {item.title}
                    </span>
                    <span className="font-inter font-bold ">{item.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${item.value * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ResumeCSVFile;
