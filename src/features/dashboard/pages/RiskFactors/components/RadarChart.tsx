import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { FormattedEntry } from "../../../../../shared/models/RiskFactor";

interface RadarChartProps {
  data: FormattedEntry[];
}

const clusters = {
  cluster0: {
    name: "Cluster 0",
    dataKey: "cluster0",
    stroke: "#8884d8",
    fill: "#8884d8",
  },
  cluster1: {
    name: "Cluster 1",
    dataKey: "cluster1",
    stroke: "#82ca9d",
    fill: "#82ca9d",
  },
  cluster2: {
    name: "Cluster 2",
    dataKey: "cluster2",
    stroke: "#ffc658",
    fill: "#ffc658",
  },
};

export default function ClusterRadarChart({ data }: RadarChartProps) {
  return (
    <div style={{ width: "100%", height: 280 }}>
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fontSize: 11, fill: "#555" }}
          />
          <PolarRadiusAxis angle={30} domain={[0, 1]} />

          {Object.keys(clusters).map((key, index) => {
            const clusterKey = key as keyof typeof clusters;
            const cluster = clusters[clusterKey];

            return (
              <Radar
                key={index}
                name={cluster.name}
                dataKey={cluster.dataKey}
                stroke={cluster.stroke}
                fill={cluster.fill}
                fillOpacity={0.4}
                dot
              />
            );
          })}

          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
