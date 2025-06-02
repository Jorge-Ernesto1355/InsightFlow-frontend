import { Card } from "antd";
import SimpleBarChart from "./components/SimpleBarChart";

const PrincipalFactorsRisk = ({
  featureImportance,
}: {
  featureImportance: Record<string, number>;
}) => {
  if (!featureImportance) {
    return <Card>Loading...</Card>;
  }
  const fiveHighest = Object.entries(featureImportance).map(([key, value]) => ({
    name: key,
    value: Math.round(value * 100) / 100,
  }));

  return (
    <Card className="w-full h-full border border-gray-200 rounded-lg shadow transition-shadow hover:shadow-lg p-5">
      <span className="text-2xl font-bold font-inter">
        Principal Factors Risk
      </span>
      <p className="font-inter text-md text-gray-600">
        Variables with the major impact on the classification
      </p>
      <SimpleBarChart data={fiveHighest} />
    </Card>
  );
};

export default PrincipalFactorsRisk;
