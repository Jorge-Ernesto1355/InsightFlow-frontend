import React from "react";
import Sidebar from "./pages/SideBar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
