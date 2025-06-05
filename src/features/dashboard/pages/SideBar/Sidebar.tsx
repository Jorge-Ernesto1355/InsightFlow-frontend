import { Divider } from "antd";
import {
  Database,
  Group,
  HomeSimple,
  ProfileCircle,
  Sparks,
  StatsUpSquare,
  WarningTriangle,
} from "iconoir-react";
import { Link, useLocation } from "react-router-dom";
import { palletesCollor } from "../../../../resourses/palletesCollor";

const Sidebar = () => {
  const links = [
    { to: "/dashboard/overview", Icon: HomeSimple, label: "Overview" },
    {
      to: "/dashboard/risk-factors",
      Icon: WarningTriangle,
      label: "Risk Factors",
    },
    { to: "/dashboard/group-details", Icon: Group, label: "Group Details" },
    {
      to: "/dashboard/prediction-tool",
      Icon: Sparks,
      label: "Ask to AI",
    },
    {
      to: "/dashboard/original-data",
      Icon: Database,
      label: "Original Data",
    },
  ];

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="">
      <div className="flex justify-start items-center space-x-2 ml-3">
        <StatsUpSquare color={palletesCollor.primary} fontSize={20} />
        <span className=" font-bold text-lg font-inter ">InsightFlow</span>
      </div>
      <Divider />
      <ul className="flex justify-center items-start space-x-4 flex-col">
        {links.map(({ to, Icon, label }) => (
          <li
            className={`flex w-64 ml-4 mt-2 justify-start  hover:bg-gray-100  space-x-3 p-3 rounded-md  ${
              pathname === to ? "text-primary bg-blue-50" : "text-gray-600"
            } `}
            key={to}
          >
            <Icon />
            <Link to={to}>
              <h3 className="text-center font-inter font-semibold ">{label}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
