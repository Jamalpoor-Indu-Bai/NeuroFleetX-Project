
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // required for dropdown/collapse
import './App.css';
import Navbar from "./components/Navbar.jsx";
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import AdminDashboard from "./dashboards/AdminDashboard.jsx";
import DriverDashboard from "./dashboards/DriverDashboard.jsx";
import CustomerDashboard from "./dashboards/CustomerDashboard.jsx";
import ManagerDashboard from "./dashboards/ManagerDashboard.jsx";

function App() {
  return (
    <div className="app">
       <Navbar />
    <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Role-based dashboards */}
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/driver" element={<DriverDashboard />} />
          <Route path="/dashboard/customer" element={<CustomerDashboard />} />
          <Route path="/dashboard/manager" element={<ManagerDashboard />} />
        </Routes>
      </div>
      

   </div>
  );
}

export default App;


