type RiskLevelText = "Low" | "Medium" | "VeryHigh" | "High" | "NoRisk";
const riskLevelText: Record<number, RiskLevelText> = {
  0: "NoRisk",
  1: "Low",
  2: "Medium",
  3: "VeryHigh",
};

export const getRiskLevelToText = (riskLevel: number): RiskLevelText => {
  return riskLevelText[riskLevel] || "NoRisk";
};
