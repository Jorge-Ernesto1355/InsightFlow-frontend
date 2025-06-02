import { Col, Row } from "antd";
import { mockData } from "../../../../../mockData";
import ResumeCSVFile from "./ResumeCSVFile";
import ResumeClusters from "./ResumeClusters";
import CentroidsDistribution from "./CentroidsDistribution";
import ImportanceVariable from "./ImportanceVariable";
import { ExtractClustersSummaries } from "./utils/ExtractClustersSummaries";

const Overview = () => {
  return (
    <div className=" p-4 border-1 font-inter border-gray-300 rounded-md">
      <ResumeCSVFile
        clusters={mockData.data.clusters}
        metadata={{
          ...mockData.data.metadata,
          time: mockData.processing_time_ms,
        }}
      />
      <Row gutter={[16, 16]} className="mt-5">
        <Col span={10}>
          <ResumeClusters
            clusters={ExtractClustersSummaries(mockData.data.cluster_summaries)}
          />
        </Col>
        <Col span={10}>
          <CentroidsDistribution mockData={mockData} />
        </Col>
      </Row>
      <ImportanceVariable
        featureImportance={mockData.data.feature_importance}
      />
    </div>
  );
};

export default Overview;
