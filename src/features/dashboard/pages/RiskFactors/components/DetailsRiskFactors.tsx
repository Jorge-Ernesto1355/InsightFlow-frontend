import { Card, Table, Tag } from "antd";
import { formatTableData } from "../utils/formatTableData";
import { mockData } from "../../../../../../mockData";
import Badge from "../../../../../shared/components/Badge";

export const getImpactColor = (level: string) => {
  switch (level) {
    case "HIGH":
      return "bg-red-100 text-red-800";
    case "MEDIUM":
      return "bg-amber-100 text-amber-800";
    case "LOW":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const getImpactColorHex = (level: string): string => {
  switch (level) {
    case "VERY_HIGH":
      return "#1E3A8A"; // Azul oscuro
    case "HIGH":
      return "#DC2626"; // Rojo
    case "MEDIUM":
      return "#F59E0B"; // Ámbar
    case "LOW":
      return "#10B981"; // Verde
    default:
      return "#6B7280"; // Gris
  }
};

const DetailsRiskFactors = () => {
  // Columnas para la tabla
  const columns = [
    {
      title: "🧪 Factor",
      dataIndex: "factor",
      key: "factor",
    },
    {
      title: "Impacto",
      dataIndex: "impacto",
      key: "impacto",
      render: (impacto: string) => (
        <Badge color={getImpactColor(impacto)} text={impacto} />
      ),
    },
    {
      title: "Valor promedio",
      dataIndex: "valor",
      key: "valor",
    },
    {
      title: "Z-score",
      dataIndex: "z_score",
      key: "z_score",
    },
    {
      title: "Contribución",
      dataIndex: "contribution",
      key: "contribution",
    },
    {
      title: "Comparación con dataset",
      dataIndex: "ratio",
      key: "ratio",
    },
    {
      title: "Clusters",
      dataIndex: "clusters",
      key: "clusters",
    },
  ];

  const data = formatTableData(mockData.data.cluster_summaries);
  return (
    <Card className=" mt-5 w-full h-full border border-gray-200 rounded-lg shadow transition-shadow hover:shadow-lg p-5">
      <span className="text-2xl font-bold font-inter">
        Factors Risk Details
      </span>
      <p className="font-inter text-md text-gray-600">
        Detailed information about the risk factors clusters
      </p>
      <Table dataSource={data} columns={columns} pagination={false} />
    </Card>
  );
};

export default DetailsRiskFactors;
