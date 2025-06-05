export interface GeneralClusteringData {
  clusters: Record<string, number>;
  feature_importance: Record<string, number>;
  centroids?: number[][];
  cluster_summaries: any[];
  metadata?: {
    numeric_columns?: string[];
    categorical_columns?: string[];
    column_stats?: Record<string, any>;
    [key: string]: any;
  };
  cluster_data?: Record<string, any[]>;
  [key: string]: any; // Allow any additional properties
}
