export const getSelectClusters = (
  clusters: Record<string, number>
): Array<{ value: string; label: string }> => {
  return Object.entries(clusters).map(([key, _]) => ({
    value: key,
    label: `Cluster #${key}`,
  }));
};
