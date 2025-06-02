import { RiskFactorFormatted } from "../../../../../shared/models/RiskFactor";

export function formatRiskFactors(
  riskFactors: RiskFactorFormatted[]
): RiskFactorFormatted[] {
  if (
    !riskFactors ||
    (Array.isArray(riskFactors) && riskFactors.length === 0)
  ) {
    return [
      {
        subject: "",
        value: 0,
        z_score: 0,
        ratio: 0,
        risk_level: "Unknown",
        cluster_to_dataset_ratio: 0,
      },
    ];
  }

  return riskFactors
    .map((riskFactor) => ({
      subject: riskFactor.subject,
      value: parseFloat(riskFactor.value.toFixed(2)),
      z_score: parseFloat(riskFactor.z_score.toFixed(2)),
      ratio: 7.07, // Fixed value or to be calculated
      risk_level: riskFactor.risk_level, // Ensure this property exists in the input
      cluster_to_dataset_ratio: riskFactor.cluster_to_dataset_ratio, // Ensure this property exists in the input
    }))
    .slice(0, 5);
}
