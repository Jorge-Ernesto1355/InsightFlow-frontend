import React, { useMemo } from "react";
import { Card } from "antd";

import { formatClusterByRiskFactors } from "./utils/formatClustersByRiskFactors";

import { Cluster, ClusterSizeMap } from "../../../../shared/models/Cluster";
import ClusterRadarChart from "./components/RadarChart";

interface RiskPerClusterProps {
  className?: string;
  clusterSummaries: Cluster[];
  clustersMap: ClusterSizeMap;
}

const RiskPerCluster: React.FC<RiskPerClusterProps> = ({
  className,
  clusterSummaries,
}: RiskPerClusterProps) => {
  // Memoize riskFactors to avoid unnecessary recalculations
  const riskFactors = useMemo(
    () => formatClusterByRiskFactors(clusterSummaries),
    []
  );

  return (
    <Card
      className={`w-full h-full border border-gray-200 rounded-lg shadow transition-shadow hover:shadow-lg p-5 ${
        className || ""
      }`}
    >
      <h2 className="text-2xl font-bold font-inter mb-2">
        Principal Factors Risk
      </h2>
      <p className="font-inter text-md text-gray-600 mb-4">
        Comparison of the risk factors clusters based on the group differences
      </p>

      <ClusterRadarChart data={riskFactors} />
    </Card>
  );
};

export default RiskPerCluster;
