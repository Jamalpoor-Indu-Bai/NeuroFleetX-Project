// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Register() {
//   return (
//     <div className="d-flex justify-content-center align-items-center vh-80 bg-primary">
//       <div className="bg-white p-5 rounded shadow-lg" style={{ minWidth: '500px', maxWidth: '600px', width: '100%' }}>
//         <h2 className="text-center mb-4">Register</h2>
//         <form>

//             <div className="mb-3">
//             <label htmlFor="email" className="form-label"><strong>Email</strong></label>
//             <input
//               type="email"
//               id="email"
//               className="form-control"
//               placeholder="Enter email"
//             />
//           </div>
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
//           <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Role
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Admin</a></li>
//             <li><a class="dropdown-item" href="#">Fleet Manager</a></li>
//             {/* <li><hr class="dropdown-divider"></li> */}
//             <li><a class="dropdown-item" href="#">Driver</a></li>
//             <li><a class="dropdown-item" href="#">Customer</a></li>
//           </ul>
//         </li>

//           <button type="submit" className="btn btn-success w-100 mb-3">Register</button>
//           <p>you are not logged in</p>
//           <Link to="/" type="button" className="btn btn-outline-primary w-100 mb-3">Log in</Link>

//           <p className="text-center text-muted small mb-0 text-decoration-none">
//             You agree to our terms and policies
//           </p>
//         </form>
//       </div>
//     </div>
//   )
// }


// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// export default function Register() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/register", { username, password });
//       alert(res.data.message);
//       navigate("/");
//     } catch (err) {
//       alert(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary">
//       <div className="bg-white p-5 rounded shadow-lg" style={{ minWidth: "400px" }}>
//         <h2 className="text-center mb-4">Register</h2>
//         <form onSubmit={handleRegister}>
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
//           <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>
//           <p className="text-center">Already have an account?</p>
//           <Link to="/" className="btn btn-outline-success w-100">Login</Link>
//         </form>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Register() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (username && email && password) {
//       alert("Registration successful!");
//       navigate("/");
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="bg-white p-5 rounded shadow-lg" style={{ minWidth: "400px" }}>
//         <h2 className="text-center mb-4">Register</h2>
//         <form onSubmit={handleRegister}>
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
//             <label className="form-label"><strong>Email</strong></label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
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

//           <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>
//           <p className="text-center mb-1">Already have an account?</p>
//           <Link to="/" className="btn btn-outline-success w-100">Login</Link>
//         </form>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Register() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState(""); // new state for role
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (username && email && password && role) {
//       alert(`Registration successful!\nRole: ${role}`);
//       navigate("/");
//     } else {
//       alert("Please fill in all fields, including role.");
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="bg-white p-5 rounded shadow-lg" style={{ minWidth: "400px" }}>
//         <h2 className="text-center mb-4">Register</h2>
//         <form onSubmit={handleRegister}>
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
//             <label className="form-label"><strong>Email</strong></label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
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

//           <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>
//           <p className="text-center mb-1">Already have an account?</p>
//           <Link to="/" className="btn btn-outline-success w-100">Login</Link>
//         </form>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope, FaUserTag } from "react-icons/fa";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (username && email && password && role) {
      alert(`Registration successful!\nRole: ${role}`);
      navigate("/");
    } else {
      alert("Please fill in all fields, including role.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="bg-white p-4 p-md-5 rounded shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleRegister}>

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

          {/* Email */}
          <div className="mb-3 input-group">
            <span className="input-group-text bg-white"><FaEnvelope /></span>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          {/* Role */}
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

          <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>
          <p className="text-center mb-1">Already have an account?</p>
          <Link to="/" className="btn btn-outline-success w-100">Login</Link>
        </form>
      </div>
    </div>
  );
}


