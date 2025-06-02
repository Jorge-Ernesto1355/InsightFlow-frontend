interface DataClusterItem {
  // define the expected properties here, e.g. id: string;
}

type DataSource = Record<string, DataClusterItem[]>;

const getDataSourceOriginalData = (
  data: DataSource | undefined
): DataClusterItem[] => {
  if (!data || Object.keys(data).length === 0) {
    return [];
  }

  // Only include clusters that are arrays, then flatten
  return Object.values(data)
    .filter((dataCluster): dataCluster is DataClusterItem[] =>
      Array.isArray(dataCluster)
    )
    .flat();
};

export default getDataSourceOriginalData;
