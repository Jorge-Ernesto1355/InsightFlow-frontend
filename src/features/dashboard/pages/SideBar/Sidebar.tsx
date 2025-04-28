import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <h2>Sidebar</h2>
      <ul className="flex space-x-4">
        <Link to="/dashboard/overview">Overview</Link>
        <Link to="/dashboard/risk-factors">Risk Factors</Link>
        <Link to="/dashboard/prediction-tool">Prediction Tool</Link>
        <Link to="/dashboard/group-details">Group Details</Link>
      </ul>
    </div>
  );
};

export default Sidebar;
