import { Card } from "antd";

type FeatureImportance = {
  [key: string]: number;
};
import PorcentageBar from "../../../../shared/components/PorcentageBar";
import ConvertImportanceToPorcentage from "./utils/ConvertImportanceToPorcentage";

interface ImportanceVaraibleProps {
  featureImportance: FeatureImportance;
}

const ImportanceVariable = ({ featureImportance }: ImportanceVaraibleProps) => {
  const readableImportanceVariables =
    ConvertImportanceToPorcentage(featureImportance);

  return (
    <Card className="h-full w-5/6 flex flex-col rounded-lg shadow border-gray-200 mt-5">
      <span className="font-inter  font-bold text-2xl">
        Importance Variable
      </span>
      <p className="font-inter text-gray-600 mb-6">
        {readableImportanceVariables.map((item) => (
          <div
            key={item.feature}
            className="flex flex-col items-center w-full  p-1"
          >
            <div className="flex justify-between w-full">
              <span className="font-inter font-semibold text-sm">
                {item.feature}
              </span>
              <span className="font-inter font-bold ">{item.percentage}%</span>
            </div>
            <PorcentageBar value={item.percentage} />
          </div>
        ))}
      </p>
    </Card>
  );
};

export default ImportanceVariable;
