import { Col, Row } from "antd";

import ResumeCSVFile from "./ResumeCSVFile";
import ResumeClusters from "./ResumeClusters";
import CentroidsDistribution from "./CentroidsDistribution";
import ImportanceVariable from "./ImportanceVariable";
import { ExtractClustersSummaries } from "./utils/ExtractClustersSummaries";
import useStore from "../../../../shared/store/AIStore";

const Overview = () => {
  const data = useStore((data) => data.data);

  return (
    <div className=" p-4 border-1 font-inter border-gray-300 rounded-md">
      <ResumeCSVFile
        clusters={data.clusters}
        metadata={{
          ...data.metadata,
          time: 3000,
        }}
      />
      <Row gutter={[16, 16]} className="mt-5">
        <Col span={10}>
          <ResumeClusters
            clusters={ExtractClustersSummaries(data.cluster_summaries)}
          />
        </Col>
        <Col span={10}>
          <CentroidsDistribution data={data} />
        </Col>
      </Row>
      <ImportanceVariable featureImportance={data.feature_importance} />
    </div>
  );
};

export default Overview;
