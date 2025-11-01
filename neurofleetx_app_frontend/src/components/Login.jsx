// import React from 'react'

// export default function Login() {
//   return (
//     <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
//         <div className='bg-white p-3 rounded w-25'>
//             <form action="">
//                 <div className='mb-3'>
//                     <label htmlFor="username">Username</label>
//                     <input type="text" placeholder='Enter username' />
//                 </div>
//                  <div className='mb-3'>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" placeholder='Enter password' />
//                 </div>
//                 <button className='btn btn-success'>Log in</button>
//                 <p>You are agree to our terms and policies</p>
//                 <button className='btn btn-default border'>Register</button>

//             </form>
//         </div>
      
//     </div>
//   )
// }


// import React from 'react';
// import { Link } from 'react-router-dom';


// export default function Login() {
//   return (
//     <div className="d-flex justify-content-center align-items-center vh-80 bg-primary">
//       <div className="bg-white p-5 rounded shadow-lg" style={{ minWidth: '500px', maxWidth: '600px', width: '100%' }}>
//         <h2 className="text-center mb-4">Login</h2>
//         <form>
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label"><strong>Username</strong></label>
//             <input
//               type="text"
//               id="username"
//               className="form-control"
//               placeholder="Enter username"
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label"><strong>Password</strong></label>
//             <input
//               type="password"
//               id="password"
//               className="form-control"
//               placeholder="Enter password"
//             />
//           </div>

//           <button type="submit" className="btn btn-success w-100 mb-3">Log in</button>
//           <p>you are not registered yet</p>
//           <Link to="/register" type="button" className="btn btn-outline-primary w-100 mb-3">Register</Link>

//           <p className="text-center text-muted small mb-0 text-decoration-none">
//             You agree to our terms and policies
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/login", { username, password });
//       alert(res.data.message);
//       localStorage.setItem("token", res.data.token);
//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
//       <div className="bg-white p-5 rounded shadow-lg" style={{ minWidth: "400px" }}>
//         <h2 className="text-center mb-4">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label"><strong>Username</strong></label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label"><strong>Password</strong></label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="btn btn-success w-100 mb-3">Log in</button>
//           <p className="text-center">Not registered yet?</p>
//           <Link to="/register" className="btn btn-outline-primary w-100 mb-3">Register</Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username && password) {
//       alert("Login successful!");
//       navigate("/dashboard");
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="bg-white p-5 rounded shadow-lg" style={{ minWidth: "400px" }}>
//         <h2 className="text-center mb-4">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-3">
//             <label className="form-label"><strong>Username</strong></label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label"><strong>Password</strong></label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <button type="submit" className="btn btn-success w-100 mb-3">Log in</button>
//           <p className="text-center mb-1">Not registered yet?</p>
//           <Link to="/register" className="btn btn-outline-primary w-100">Register</Link>
//         </form>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState(""); // new state for role
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username && password && role) {
//       alert(`Login successful!\nRole: ${role}`);
//       navigate("/dashboard");
//     } else {
//       alert("Please fill in all fields, including role.");
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="bg-white p-5 rounded shadow-lg" style={{ minWidth: "400px" }}>
//         <h2 className="text-center mb-4">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-3">
//             <label className="form-label"><strong>Username</strong></label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label"><strong>Password</strong></label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           {/* Role Dropdown */}
//           <div className="mb-3">
//             <label className="form-label"><strong>Select Role</strong></label>
//             <select
//               className="form-select"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//             >
//               <option value="">-- Select Role --</option>
//               <option value="Admin">Admin</option>
//               <option value="Driver">Driver</option>
//               <option value="Customer">Customer</option>
//               <option value="Manager">Manager</option>
//             </select>
//           </div>

//           <button type="submit" className="btn btn-success w-100 mb-3">Log in</button>
//           <p className="text-center mb-1">Not registered yet?</p>
//           <Link to="/register" className="btn btn-outline-primary w-100">Register</Link>
//         </form>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaUser, FaLock, FaUserTag } from "react-icons/fa"; // icons

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username && password && role) {
//       alert(`Login successful!\nRole: ${role}`);
//       navigate("/dashboard");
//     } else {
//       alert("Please fill in all fields, including role.");
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="bg-white p-4 p-md-5 rounded shadow-lg w-100" style={{ maxWidth: "400px" }}>
//         <h2 className="text-center mb-4">Login</h2>
//         <form onSubmit={handleLogin}>

//           {/* Username */}
//           <div className="mb-3 input-group">
//             <span className="input-group-text bg-white"><FaUser /></span>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-3 input-group">
//             <span className="input-group-text bg-white"><FaLock /></span>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           {/* Role */}
//           <div className="mb-3 input-group">
//             <span className="input-group-text bg-white"><FaUserTag /></span>
//             <select
//               className="form-select"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//             >
//               <option value="">-- Select Role --</option>
//               <option value="Admin">Admin</option>
//               <option value="Driver">Driver</option>
//               <option value="Customer">Customer</option>
//               <option value="Manager">Manager</option>
//             </select>
//           </div>

//           <button type="submit" className="btn btn-success w-100 mb-3">Log in</button>
//           <p className="text-center mb-1">Not registered yet?</p>
//           <Link to="/register" className="btn btn-outline-primary w-100">Register</Link>
//         </form>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaUserTag } from "react-icons/fa";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password && role) {
      // Role-based navigation
      switch (role) {
        case "Admin":
          navigate("/dashboard/admin");
          break;
        case "Driver":
          navigate("/dashboard/driver");
          break;
        case "Customer":
          navigate("/dashboard/customer");
          break;
        case "Manager":
          navigate("/dashboard/manager");
          break;
        default:
          navigate("/dashboard");
      }
    } else {
      alert("Please fill in all fields, including role.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="bg-white p-4 p-md-5 rounded shadow-lg w-100"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>

          {/* Username */}
          <div className="mb-3 input-group">
            <span className="input-group-text bg-white"><FaUser /></span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-3 input-group">
            <span className="input-group-text bg-white"><FaLock /></span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Role Dropdown */}
          <div className="mb-3 input-group">
            <span className="input-group-text bg-white"><FaUserTag /></span>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">-- Select Role --</option>
              <option value="Admin">Admin</option>
              <option value="Driver">Driver</option>
              <option value="Customer">Customer</option>
              <option value="Manager">Manager</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success w-100 mb-3">Log in</button>

          <p className="text-center mb-1">Not registered yet?</p>
          <Link to="/register" className="btn btn-outline-primary w-100">Register</Link>
        </form>
      </div>
    </div>
  );
}


