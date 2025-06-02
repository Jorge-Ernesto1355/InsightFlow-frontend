const ConvertImportanceToPorcentage = (
  rawImportance: Record<string, number> = {}
) => {
  const total = Object.values(rawImportance).reduce(
    (acc, value) => acc + value,
    0
  );
  return Object.entries(rawImportance)
    .map(([Key, value]) => ({
      feature: Key,
      percentage: +((value / total) * 100).toFixed(2),
    }))
    .sort((a, b) => b.percentage - a.percentage);
};

export default ConvertImportanceToPorcentage;
