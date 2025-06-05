import { Advantage } from "../components/Advantages";
import { FileSpreadsheet, Zap, Shield, Clock } from "lucide-react";
export const advantages: Advantage[] = [
  {
    id: 1,
    title: "Lightning Fast Upload",
    Icon: Zap,
    description:
      "Process your CSV files instantly with our optimized upload system.",
    color: "text-green-600",
    backgroundColor: "bg-green-100",
  },
  {
    id: 2,
    title: "Secure Upload",
    Icon: Shield,
    description:
      "Your data is processed securely with enterprise-grade protection",
    color: "text-blue-600",
    backgroundColor: "bg-blue-100",
  },
  {
    id: 3,
    title: "Real-time Analysis",
    Icon: Clock,
    description: "Watch your files process in real-time with visual feedback.",
    color: "text-purple-600",
    backgroundColor: "bg-purple-100",
  },
];
