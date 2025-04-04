import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div>
      {!isAdmin && <Navigate to={"/users"} />}
      <h1>This is admin Dashboard</h1>
    </div>
  );
};

export default Dashboard;
