// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function AdminDashboard() {
//   const navigate = useNavigate();
//   const logout = () => navigate("/");

//   return (
//     <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
//       <h1>Admin Dashboard</h1>
//       <p>Welcome, Admin!</p>
//       <button className="btn btn-danger mt-3" onClick={logout}>Logout</button>
//     </div>
//   );
// }

import React from 'react';
import VehicleDashboard from './VehicleDashboard';

export default function AdminDashboard() {
  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>
      <VehicleDashboard /> {/* Shows all vehicles */}
    </div>
  );
}




