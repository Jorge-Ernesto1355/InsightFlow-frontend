import React from "react";
import { FileSpreadsheet, Zap, Shield, Clock } from "lucide-react";

export interface Advantage {
  id: number;
  title: string;
  Icon: typeof FileSpreadsheet | typeof Zap | typeof Shield | typeof Clock;
  description: string;
  color: string;
  backgroundColor?: string;
}

interface AdvantagesProps {
  // Define any props if needed
  advantages: Advantage[];
}

const Advantages = ({ advantages = [] }: AdvantagesProps) => {
  return (
    <ul className="flex flex-wrap ml- place-content-center md:grid-cols-2 lg:grid-cols-4 gap-4  p-4 ">
      {advantages.map(
        ({
          id,
          Icon,
          title,
          description,
          color,
          backgroundColor,
        }: Advantage) => (
          <li
            key={id}
            className={`backdrop-blur-sm font-inter flex flex-col justify-center items-center shadow-md rounded-lg p-6 bg-white hover:shadow-lg transition-shadow duration-300 `}
          >
            <div
              className={`inline-flex items-center justify-center w-12 h-12  rounded-xl mb-4 ${backgroundColor}`}
            >
              <Icon className={` h-6 w-6 ${color} `} />
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-500 text-sm">{description}</p>
          </li>
        )
      )}
    </ul>
  );
};

export default Advantages;
