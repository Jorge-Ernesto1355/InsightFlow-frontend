import { Cluster } from "../../../../../shared/models/Cluster";
import { ClusterSummary } from "../../../../../shared/models/ClustersSummary";

export const ExtractClustersSummaries = (
  clusterSummaries: Cluster[] = []
): ClusterSummary[] => {
  return clusterSummaries.map((cluster: Cluster) => ({
    cluster_id: cluster.cluster_id,
    size: cluster.size,
    riskLevel: cluster.risk_level,
    riskScore: cluster.risk_score,
  }));
};
