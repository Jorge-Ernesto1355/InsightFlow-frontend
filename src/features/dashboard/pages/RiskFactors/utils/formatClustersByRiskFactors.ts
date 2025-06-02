import { Cluster } from "../../../../../shared/models/Cluster";
import { FormattedEntry } from "../../../../../shared/models/RiskFactor";

export const formatClusterByRiskFactors = (
  clusters: Cluster[]
): FormattedEntry[] => {
  if (!clusters || clusters.length === 0) {
    return [];
  }

  const subjectSet = new Set<string>();
  clusters.forEach((cluster) => {
    Object.keys(cluster.risk_factors).forEach((key) => subjectSet.add(key));
  });

  const subjects = Array.from(subjectSet).slice(0, 5);

  const result: FormattedEntry[] = subjects.map((subject) => {
    const entry: FormattedEntry = { subject };

    clusters.forEach((cluster) => {
      const clusterId = `cluster${cluster.cluster_id}`;
      const riskData = cluster.risk_factors[subject];
      entry[clusterId] = riskData ? parseFloat(riskData.value.toFixed(3)) : 0;
    });

    return entry;
  });

  return result.slice(0, 5);
};
