import { Card, Flex } from "antd";
import { WarningTriangle } from "iconoir-react";

const Considerations = () => {
  return (
    <Card className="w-full border border-gray-200 rounded-lg shadow transition-shadow hover:shadow-lg p-2">
      <Flex className="items-center mb-2 space-x-2">
        <WarningTriangle color="#FFB800" className="w-5 h-5" />
        <span className="text-xl font-bold font-inter">Considerations</span>
      </Flex>
      <p className="font-inter text-md text-gray-600">
        Considerations for the analysis
      </p>
      <ul className="list-disc pl-5 space-y-2 mt-2">
        <li className="font-inter text-md text-gray-600">
          The AI model is trained on a specific dataset and may not generalize
          well to other datasets.
        </li>
        <li className="font-inter text-md text-gray-600">
          The model's performance can vary based on the quality and quantity of
          the training data.
        </li>
        <li className="font-inter text-md text-gray-600">
          Interpretability of AI models can be challenging, and results should
          be validated with domain experts.
        </li>
        <li className="font-inter text-md text-gray-600">
          Ethical considerations should be taken into account when deploying AI
          solutions.
        </li>
      </ul>
    </Card>
  );
};

export default Considerations;
