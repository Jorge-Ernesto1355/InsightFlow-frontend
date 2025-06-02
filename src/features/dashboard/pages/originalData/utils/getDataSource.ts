import React from "react";
import { columnsStats, sourceMedatada } from "../models/metadata";

const getDataSource = (data: columnsStats): sourceMedatada[] => {
  return Object.entries(data).map(([column, stats]: [string, any], index) => ({
    key: index.toString(),
    column,
    type: stats.type,
    missingPercent: stats.missing_values?.percentage ?? "-",
    meanOrMode: stats.type === "numeric" ? stats.mean : stats.mode,
    stdDev: stats.type === "numeric" ? stats.std_dev : "-",
    min: stats.type === "numeric" ? stats.min : "-",
    max: stats.type === "numeric" ? stats.max : "-",
    missing_values: stats.missing_values,
    mode: stats.mode,
    mode_frequency_percent: stats.mode_frequency_percent,
    unique_values_count: stats.unique_values_count,
  }));
};

export default getDataSource;
