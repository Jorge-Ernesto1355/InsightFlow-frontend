interface MissingValues {
  count: number;
  percentage: number;
}

interface NumericStats {
  missing_values: MissingValues;
  type: string;
  mean: number;
  std_dev: number;
  min: number;
  max: number;
  median: number;
}

interface CategoricalStats {
  missing_values: MissingValues;
  type: string;
  mode: string;
  mode_frequency_percent: number;
  unique_values_count: number;
}

export type columnsStats = {
  [columnsName: string]: NumericStats | CategoricalStats;
};

export type sourceMedatada =
  | NumericStats
  | (CategoricalStats & { key: string; column: string });
