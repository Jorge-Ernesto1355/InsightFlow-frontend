import React from "react";
import { Card, Progress, Typography, Row, Col } from "antd";
import { getImpactColorHex } from "../../RiskFactors/components/DetailsRiskFactors";

const { Title, Text } = Typography;

interface RiskFactor {
  value: number;
  contribution: number;
  risk_level: string;
  z_score: number;
  deviation_ratio: number;
  cluster_to_dataset_ratio: number;
}

interface ClusterSummary {
  cluster_id: number;
  risk_factors: Record<string, RiskFactor>;
}

interface Props {
  cluster: ClusterSummary;
}

const RiskFactorCard: React.FC<{
  label: string;
  value: number;
  level: string;
}> = ({ label, value, level }) => {
  return (
    <Card
      size="small"
      style={{ marginBottom: 16, borderRadius: 12, height: "100%" }}
    >
      <div className="flex  items-center justify-between">
        <Text strong>{label}</Text>
        <span className="font-inter text-md text-gray-600 font-semibold">
          {Math.round(Math.abs(value * 100))}%
        </span>
      </div>
      <Progress
        percent={Math.round(Math.abs(value * 100))}
        showInfo={false}
        strokeColor={getImpactColorHex(level)}
      />
      <Text type="secondary" style={{ fontSize: 14 }}>
        {level}
      </Text>
    </Card>
  );
};

const DominantValuesPanel: React.FC<Props> = ({ cluster }) => {
  const riskFactors = Object.entries(cluster.risk_factors);

  return (
    <Card className="w-full h-full border border-gray-200 rounded-lg shadow transition-shadow hover:shadow-lg p-2">
      <span className="text-2xl font-bold font-inter">Dominant Values</span>
      <p className="font-inter text-md text-gray-600">
        Categorics values that appeard most frecuently in the group
      </p>
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        {riskFactors.map(([key, factor]) => (
          <Col xs={24} sm={12} md={8} lg={6} key={key}>
            <RiskFactorCard
              label={key}
              value={factor.value}
              level={factor.risk_level}
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default DominantValuesPanel;
