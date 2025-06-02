import { Card, Flex } from "antd";
import { Sparks } from "iconoir-react";
import React from "react";

const SuggestedQuestions = () => {
  return (
    <Card className="w-full border border-gray-200 rounded-lg shadow transition-shadow hover:shadow-lg p-2">
      <Flex className="space-x-2">
        <Sparks color="#FFB800" className="w-5 h-5" />
        <span className="text-2xl font-bold font-inter">Common Questions</span>
      </Flex>
      <p className="font-inter text-md text-gray-600">
        Here are some common questions that you may have about your data:
      </p>
      <ul className=" space-y-2 mt-2">
        <li className="font-inter border rounded-md text-gray-700 p-2">
          What patterns have been identified in the data?
        </li>
        <li className="font-inter border rounded-md text-gray-700 p-2">
          Can I see the features that define each cluster?
        </li>
        <li className="font-inter border rounded-md text-gray-700 p-2">
          Can the system compare different clusters for me?
        </li>
        <li className="font-inter border rounded-md text-gray-700 p-2">
          What happens if the data inside a cluster is very diverse?
        </li>
      </ul>
    </Card>
  );
};

export default SuggestedQuestions;
