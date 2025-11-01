import React from "react";
import { useNavigate } from "react-router-dom";

export default function ManagerDashboard() {
  const navigate = useNavigate();
  const logout = () => navigate("/");

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1>Manager Dashboard</h1>
      <p>Welcome, Manager!</p>
      <button className="btn btn-danger mt-3" onClick={logout}>Logout</button>
    </div>
  );
}
