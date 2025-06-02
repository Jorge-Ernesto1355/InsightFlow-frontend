export interface RiskFactor {
  value: number;
  contribution: number;
  risk_level: string;
  z_score: number;
  deviation_ratio: number;
  cluster_to_dataset_ratio: number;
}

export interface FormattedEntry {
  subject: string;
  [clusterKey: string]: string | number;
}
