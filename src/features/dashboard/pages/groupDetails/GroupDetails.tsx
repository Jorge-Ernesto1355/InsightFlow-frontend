import { Col, Row } from "antd";
import DistributtionGroup from "./components/DistributtionGroup";
import { mockData } from "../../../../../mockData";
import DominantValuesPanel from "./components/DominantValues";
import RegistersPerGroup from "./components/RegistersPerGroup";
import SelectCluster from "./components/SelectCluster";
import { getSelectClusters } from "./utils/getSelectClusters";
import { useLocation } from "react-router-dom";

const GroupDetails = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const cluster = parseInt(query.get("cluster") || "0", 10);
  const clustersToSelect = getSelectClusters(mockData.data.clusters);

  return (
    <div className="p-4 font-inter">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-3xl font-bold font-inter">Group Details</span>
          <p className="text-gray-500 font-medium mt-2 mb-4 font-inter">
            Details of the group selected
          </p>
        </div>

        <SelectCluster options={clustersToSelect} />
      </div>
      <Row gutter={[16, 16]} className="mt-5">
        <Col span={12}>
          <DistributtionGroup values={mockData.data.centroids[cluster]} />
        </Col>
        <Col span={12}>
          <DominantValuesPanel
            cluster={mockData.data.cluster_summaries[cluster]}
          />
        </Col>
      </Row>
      <RegistersPerGroup registers={mockData.data.cluster_data[cluster]} />
    </div>
  );
};

export default GroupDetails;
