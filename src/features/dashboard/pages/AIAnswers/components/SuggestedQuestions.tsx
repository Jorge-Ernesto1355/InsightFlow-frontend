import { Card, Flex } from "antd";
import { Sparks } from "iconoir-react";

import { messageService } from "../services/SuggestionQuestion";


export interface question {
  id: string;
  value: string;
}

interface SuggestedQuestionsProps {
  questions: question[]
}


const SuggestedQuestions = ({questions = []}: SuggestedQuestionsProps ) => {


  const handleSubmitQuestion = (question: string)=> {
    messageService.sendMessage(question)
  }
 
  
  
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
      {questions?.map((question) => (
        <li  key={question.id} onClick={()=> handleSubmitQuestion(question.value)} className=" rounded-md px-2  border border-gray-400 py-2 text-gray-700 font-inter text-md font-medium hover:text-blue-600 cursor-pointer transition-colors duration-200">
          {question.value}
        </li>
      ))}
        
      </ul>
     
    </Card>
  );
};

export default SuggestedQuestions;
