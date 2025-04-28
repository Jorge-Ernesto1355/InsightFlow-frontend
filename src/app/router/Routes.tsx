import { createBrowserRouter } from "react-router-dom";
import Home from "../../features/Home/Home";
import Root from "../../Root";
import Dashboard from "../../features/dashboard/Dashboard";
import Overview from "../../features/dashboard/pages/overview/Overview";
import RiskFactors from "../../features/dashboard/pages/RiskFactors/RiskFactors";
import PredictionTool from "../../features/dashboard/pages/predictionTool/PredictionTool";
import GroupDetails from "../../features/dashboard/pages/groupDetails/GroupDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "  ", element: <Home /> },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "risk-factors",
        element: <RiskFactors />,
      },
      {
        path: "prediction-tool",
        element: <PredictionTool />,
      },
      {
        path: "group-details",
        element: <GroupDetails />,
      },
    ],
  },
]);
