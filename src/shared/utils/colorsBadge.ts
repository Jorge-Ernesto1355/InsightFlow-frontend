const clusters = {
  High: {
    color: "bg-red-100 text-red-800",
  },
  Medium: {
    color: "bg-amber-100 text-amber-800",
  },
  Low: {
    color: "bg-green-100 text-green-800",
  },
  VeryHigh: {
    color: "bg-blue-100 text-blue-800",
  },
  NoRisk: {
    color: "bg-gray-100 text-gray-800",
  },
};

export type ClusterKey = keyof typeof clusters;

export const getColorBadge = (color: ClusterKey): string => {
  return clusters[color].color || clusters.NoRisk.color;
};
