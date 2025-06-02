import { Col, Row } from "antd";
import Sidebar from "./pages/SideBar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Row gutter={[16, 16]} className="h-screen">
        <Col span={4} className="bg-white shadow-md p-4">
          <Sidebar />
        </Col>

        <Col span={20} className="bg-gray-100  ">
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
