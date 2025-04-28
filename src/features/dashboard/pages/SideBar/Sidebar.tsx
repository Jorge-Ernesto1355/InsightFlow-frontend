import { Group, HomeSimple, ProfileCircle, ReportsSolid } from "iconoir-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { to: "/dashboard/overview", Icon: HomeSimple, label: "Overview" },
    { to: "/dashboard/group-details", Icon: Group, label: "Group Details" },
    { to: "/dashboard/prediction-tool", Icon: ProfileCircle, label: "Prediction tool" },
    { to: "/dashboard/risk-factors", Icon: ReportsSolid, label: "Risk Factors" },
  ];

  return (
    <div className="">
      <ul className="flex space-x-4 flex-col">
        <li className="flex justify-start items-center space-x-2 p-2  ml-2">
          <h3 className="text-black font-bold text-lg">Dashboard</h3>
        </li>
        {links.map(({ to, Icon, label }) => (
          <li className="flex justify-start items-center space-x-3 p-2 rounded-md hover:bg-gray-100 ml-2" key={to}>
            <Icon />
            <Link to={to}>
              <h3 className="text-black">{label}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
