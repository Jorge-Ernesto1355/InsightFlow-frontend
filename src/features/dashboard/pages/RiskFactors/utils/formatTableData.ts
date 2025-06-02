import { Cluster } from "../../../../../shared/models/Cluster";

export const formatTableData = (clusters: Cluster[]) => {
  const map = new Map<
    string,
    {
      impact: string;
      clusters: number[];
      avgValue: number;
      z_score: number;
      contribution: number;
      ratio: number;
    }
  >();

  clusters.forEach((cluster) => {
    Object.entries(cluster.risk_factors).forEach(([key, val]) => {
      if (!map.has(key)) {
        map.set(key, {
          impact: val.risk_level,
          clusters: [cluster.cluster_id],
          avgValue: val.value,
          z_score: val.z_score,
          contribution: val.contribution,
          ratio: val.cluster_to_dataset_ratio,
        });
      } else {
        const entry = map.get(key)!;
        entry.clusters.push(cluster.cluster_id);
        // Promediamos los valores (opcional)
        entry.avgValue = (entry.avgValue + val.value) / 2;
        entry.z_score = (entry.z_score + val.z_score) / 2;
        entry.contribution = (entry.contribution + val.contribution) / 2;
        entry.ratio = (entry.ratio + val.cluster_to_dataset_ratio) / 2;
      }
    });
  });

  return Array.from(map.entries()).map(([key, data], i) => ({
    key: i,
    factor: key,
    impacto: data.impact,
    valor: data.avgValue.toFixed(2),
    z_score: data.z_score.toFixed(2),
    contribution: data.contribution.toFixed(4),
    ratio: data.ratio.toFixed(2),
    clusters: data.clusters.join(", "),
  }));
};
