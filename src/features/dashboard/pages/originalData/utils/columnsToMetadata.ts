import React from "react";
import Badge from "../../../../../shared/components/Badge";

export const ColumnsToMetadata = [
  {
    title: "Column",
    dataIndex: "column",
    key: "column",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (type: string) => {
      const color =
        type === "numeric"
          ? "bg-blue-100 text-blue-800"
          : "bg-purple-100 text-purple-800"; // azul o verde
      const label = type === "numeric" ? "Numeric" : "Categorical";

      return React.createElement(Badge, { color: color, text: label });
    },
  },
  {
    title: "Missing (%)",
    dataIndex: "missingPercent",
    key: "missingPercent",
  },
  {
    title: "Mean/Mode",
    dataIndex: "meanOrMode",
    key: "meanOrMode",
  },
  {
    title: "Std. Dev",
    dataIndex: "stdDev",
    key: "stdDev",
  },
  {
    title: "Min",
    dataIndex: "min",
    key: "min",
  },
  {
    title: "Max",
    dataIndex: "max",
    key: "max",
  },
];
