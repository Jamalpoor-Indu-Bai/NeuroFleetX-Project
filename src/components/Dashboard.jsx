import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1>Welcome to Dashboard 🎉</h1>
      <button onClick={logout} className="btn btn-danger mt-3">Logout</button>
    </div>
  );
}
