import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <h1 className="text-center h1 fw-bold">Welcome to Dashboard</h1>
      <div class="col-md-12 text-center">
        <button type="submit" class="btn btn-danger" onClick={logoutUser}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
