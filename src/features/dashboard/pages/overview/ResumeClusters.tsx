import { Card, Tooltip } from "antd";
import { InfoCircle } from "iconoir-react";
import Badge from "../../../../shared/components/Badge";
import PorcentageBar from "../../../../shared/components/PorcentageBar";
import { ClusterSummary } from "../../../../shared/models/ClustersSummary";
import { getRiskLevelToText } from "./utils/getRiskLevelToText";
import { getColorBadge } from "../../../../shared/utils/colorsBadge";

interface ResumeClustersProps {
  clusters: ClusterSummary[];
}

const ResumeClusters = ({ clusters }: ResumeClustersProps) => {
  return (
    <Card className="w-full h-full border border-gray-200 rounded-lg shadow transition-shadow hover:shadow-lg p-5">
      <h2 className="font-inter text-3xl font-bold">Cluster Summary</h2>
      <div className="flex justify-start items-center">
        <span className="font-inter  font-medium">
          Distribution and labels of the identified groups
        </span>
        <Tooltip
          color="white"
          trigger={"click"}
          title={
            <>
              <h5 className="font-inter font-bold text-gray-700  ">
                What is a Centroid?
              </h5>
              <span className="text-black font-inter">
                Un centroide es el "centro matemático" de un grupo de datos,
                normalmente en un algoritmo de agrupamiento como k-means.
              </span>
            </>
          }
        >
          <InfoCircle color="gray" className="ml-2 cursor-pointer" />
        </Tooltip>
      </div>

      <div className="space-y-4 mt-5">
        {clusters.map((cluster) => {
          const color = getColorBadge(getRiskLevelToText(cluster.riskLevel));
          const text = getRiskLevelToText(cluster.riskLevel);
          const total = clusters.reduce((acc, curr) => acc + curr.size, 0);
          const percentage = (cluster.size / total) * 100;

          return (
            <div key={cluster.cluster_id} className="flex items-center">
              <div className="w-8 text-sm font-medium">
                #{cluster.cluster_id}
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <Badge color={color} text={text} />
                    <span className="ml-2 text-sm text-gray-500 w-full">
                      {cluster.size} Registers
                    </span>
                  </div>
                  <span className="text-sm font-medium  flex justify-end ">
                    {percentage.toFixed(2)}%
                  </span>
                </div>

                <PorcentageBar value={percentage.toFixed(2)} />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ResumeClusters;
