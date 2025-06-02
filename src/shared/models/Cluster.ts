import { RiskFactor } from "./RiskFactor";

export interface Cluster {
  cluster_id: number;
  size: number;
  feature_means: Record<string, number>;
  categorical_modes: Record<string, string>;
  risk_level: number;
  risk_score: number;
  risk_factors: Record<string, RiskFactor>;
  relative_risk: {
    compared_to_avg: number;
    percent_of_avg: number;
    above_average: boolean;
    below_average: boolean;
    risk_difference: number;
  };
}

export interface ClusterSizeMap {
  [clusterIndex: string]: number;
}
