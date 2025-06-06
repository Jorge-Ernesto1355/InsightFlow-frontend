import { Col, Row } from "antd";
import PrincipalFactorsRisk from "./PrincipalFactorsRisk";
import RiskPerCluster from "./RiskPerCluster";
import { mockData } from "../../../../../mockData";
import DetailsRiskFactors from "./components/DetailsRiskFactors";
import useStore from "../../../../shared/store/AIStore";

const RiskFactors = () => {
  const data = useStore((data) => data.data);

  return (
    <div className="w-full p-4 m-4 h-screen border-1 border-gray-300 rounded-md">
      <span className="text-3xl font-bold font-inter">Risk Factors</span>
      <p className="font-inter text-gray-500 text-lg ">
        Distribution of the differents risk factors clusters based on the groups
        diferences
      </p>
      <Row gutter={[16, 16]} className="mt-5">
        <Col xs={24} md={12} lg={12}>
          <PrincipalFactorsRisk featureImportance={data.feature_importance} />
        </Col>
        <Col xs={24} md={12} lg={12}>
          <RiskPerCluster
            clustersMap={data.clusters}
            clusterSummaries={data.cluster_summaries}
          />
        </Col>
      </Row>
      <DetailsRiskFactors data={data || {}} />
    </div>
  );
};

export default RiskFactors;
