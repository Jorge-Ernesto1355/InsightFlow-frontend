import { createBrowserRouter } from "react-router-dom";
import Home from "../../features/Home/Home";
import Root from "../../Root";
import Dashboard from "../../features/dashboard/Dashboard";
import Overview from "../../features/dashboard/pages/overview/Overview";
import RiskFactors from "../../features/dashboard/pages/RiskFactors/RiskFactors";

import GroupDetails from "../../features/dashboard/pages/groupDetails/GroupDetails";
import OriginalData from "../../features/dashboard/pages/originalData/OriginalData";
import AIAnswers from "../../features/dashboard/pages/AIAnswers/AIAnswers";

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
      { index: true, element: <Home /> },
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
        element: <AIAnswers />,
      },
      {
        path: "group-details",
        element: <GroupDetails />,
      },
      {
        path: "original-data",
        element: <OriginalData />,
      },
    ],
  },
]);
