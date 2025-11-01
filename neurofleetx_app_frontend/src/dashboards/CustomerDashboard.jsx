import React from "react";
import { useNavigate } from "react-router-dom";

export default function CustomerDashboard() {
  const navigate = useNavigate();
  const logout = () => navigate("/");

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1>Customer Dashboard</h1>
      <p>Welcome, Customer!</p>
      <button className="btn btn-danger mt-3" onClick={logout}>Logout</button>
    </div>
  );
}
