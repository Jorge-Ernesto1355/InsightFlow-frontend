import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SimpleBarChart({
  data = [],
}: {
  data: Array<{ name: string; value: number }>;
}) {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <ResponsiveContainer width="80%" height={200}>
      <BarChart data={data.slice(0, 5)}>
        <XAxis
          dataKey="name"
          angle={-30}
          textAnchor="end"
          interval={0}
          tick={{ fontSize: 12, fill: "#333" }}
        />
        <YAxis
          tick={false}
          label={{
            value: "Importance",
            angle: -90,
            position: "insideLeft",
            fill: "#555",
          }}
        />
        <Tooltip formatter={(v) => v} />
        <Bar
          dataKey="value"
          fill="#5AB2FF" // Set the color for all rectangles here
          label={{
            position: "top",
            formatter: (v: number) => v.toFixed(2),
            fill: "#000000",
            fontSize: 12,
            fontFamily: "Inter",
            fontWeight: 600,
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
