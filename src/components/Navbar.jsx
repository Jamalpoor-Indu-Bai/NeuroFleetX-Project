// import React from 'react';

// export default function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">NeuroFleetX</a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Admin</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">FleetManager</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Customer</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Driver</a>
//               </li>

//               {/* <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Dropdown
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li><a className="dropdown-item" href="#">Action</a></li>
//                   <li><a className="dropdown-item" href="#">Another action</a></li>
//                   <li><hr className="dropdown-divider" /></li>
//                   <li><a className="dropdown-item" href="#">Something else here</a></li>
//                 </ul>
//               </li> */}
//               {/* <li className="nav-item">
//                 <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//               </li> */}
//             </ul>
//             {/* <form className="d-flex" role="search">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form> */}
//             <button className='btn btn'>logout</button>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }


// import React from 'react';

// export default function Navbar() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
//         <div className="container-fluid">
//           {/* Brand */}
//           <a className="navbar-brand fw-bold" href="#">
//             NeuroFleetX
//           </a>

//           {/* Mobile Toggle */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Navbar Links */}
//           <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-4 mb-2 mb-lg-0">
//               <li className="nav-item"><a className="nav-link" href="#">Admin</a></li>
//               <li className="nav-item"><a className="nav-link" href="#">FleetManager</a></li>
//               <li className="nav-item"><a className="nav-link" href="#">Customer</a></li>
//               <li className="nav-item"><a className="nav-link" href="#">Driver</a></li>
//             </ul>
//             <button className="btn logout-btn">Logout</button>
//           </div>
//         </div>
//       </nav>

//       {/* Inline CSS */}
//       <style>{`
//         /* Blue Navbar */
//         .navbar {
//           position: fixed;
//           top: 0;
//           width: 100%;
//           z-index: 1000;
//           background-color: #0d6efd; /* Bootstrap primary blue */
//         }

//         /* White text for everything */
//         .navbar-brand,
//         .nav-link {
//           color: white !important;
//           font-weight: 500;
//         }

//         .nav-link:hover {
//           color: #e2e6ea !important; /* light gray hover effect */
//         }

//         /* Spacing between nav items */
//         .navbar-nav {
//           gap: 1rem;
//         }

//         /* Logout button styling */
//         .logout-btn {
//           border: 2px solid white;
//           color: white;
//           background-color: transparent;
//           border-radius: 6px;
//           padding: 6px 14px;
//           font-weight: 500;
//           transition: all 0.3s ease;
//         }

//         .logout-btn:hover,
//         .logout-btn:active {
//           background-color: white;
//           color: #0d6efd;
//         }

//         /* Avoid content hiding under navbar */
//         body {
//           padding-top: 70px;
//         }
//       `}</style>
//     </>
//   );
// }

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // redirect to login page on logout
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
        <div className="container-fluid">
          {/* Brand */}
          <Link className="navbar-brand fw-bold" to="/">
            NeuroFleetX
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav ms-4 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/admin">Admin</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/manager">FleetManager</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/customer">Customer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/driver">Driver</Link>
              </li>
            </ul>
            <button className="btn logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>

      {/* Inline CSS */}
      <style>{`
        /* Blue Navbar */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          background-color: #0d6efd; /* Bootstrap primary blue */
        }

        /* White text for everything */
        .navbar-brand,
        .nav-link {
          color: white !important;
          font-weight: 500;
        }

        .nav-link:hover {
          color: #e2e6ea !important; /* light gray hover effect */
        }

        /* Spacing between nav items */
        .navbar-nav {
          gap: 1rem;
        }

        /* Logout button styling */
        .logout-btn {
          border: 2px solid white;
          color: white;
          background-color: transparent;
          border-radius: 6px;
          padding: 6px 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .logout-btn:hover,
        .logout-btn:active {
          background-color: white;
          color: #0d6efd;
        }

        /* Avoid content hiding under navbar */
        body {
          padding-top: 70px;
        }
      `}</style>
    </>
  );
}


