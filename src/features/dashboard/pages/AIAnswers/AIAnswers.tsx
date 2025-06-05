import React from "react";
import { ChatInterface } from "./components/chatInterface";
import { Col, Row } from "antd";
import Considerations from "./components/Considerations";
import SuggestedQuestions from "./components/SuggestedQuestions";
import { questions } from "./utils/questions";

const AIAnswers = () => {
  
          
  
  return (
    <div className="p-4 font-inter  h-full">
      <span className="text-3xl font-semibold font-inter text-black">
        Inteligente Analysis of your data
      </span>
      <p className="text-gray-500 font-medium mt-2 mb-4 font-inter">
        Make questions about your data and get answers in natural language.
      </p>

      <Row className=" h-3/4" gutter={[16, 16]}>
        <Col span={15}>
          <ChatInterface apiKey={import.meta.env.VITE_HF_API_TOKEN} />
        </Col>
        <Col span={7} className="flex flex-col space-y-4">
          <SuggestedQuestions questions={questions} />
          <Considerations />
        </Col>
      </Row>
    </div>
  );
};

export default AIAnswers;
