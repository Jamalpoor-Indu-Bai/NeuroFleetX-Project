// import React, { useEffect, useState } from 'react';
// import API from '../../api';
// import { Card, ProgressBar, Button } from 'react-bootstrap';

// export default function VehicleDashboard(){
//   const [vehicles,setVehicles]=useState([]);
//   const [newVehicle,setNewVehicle]=useState({name:'',type:'Electric',status:'Available',battery:100,fuel:100,latitude:0,longitude:0});

//   // Load vehicles
//   useEffect(()=>{
//     API.get("/api/vehicles").then(res=>setVehicles(res.data));
//   },[]);

//   // Add vehicle
//   const handleAdd = async()=>{
//     const res = await API.post("/api/vehicles", newVehicle);
//     setVehicles([...vehicles, res.data]);
//   }

//   // Delete vehicle
//   const handleDelete = async(id)=>{
//     await API.delete(`/api/vehicles/${id}`);
//     setVehicles(vehicles.filter(v=>v.id!==id));
//   }

//   return(
//     <div className="container mt-5">
//       <h2>Fleet Vehicles</h2>

//       {/* Add Vehicle Form */}
//       <div className="mb-4">
//         <input className="form-control mb-2" placeholder="Vehicle Name" value={newVehicle.name} onChange={e=>setNewVehicle({...newVehicle,name:e.target.value})}/>
//         <input className="form-control mb-2" placeholder="Type" value={newVehicle.type} onChange={e=>setNewVehicle({...newVehicle,type:e.target.value})}/>
//         <input className="form-control mb-2" placeholder="Status" value={newVehicle.status} onChange={e=>setNewVehicle({...newVehicle,status:e.target.value})}/>
//         <input type="number" className="form-control mb-2" placeholder="Battery %" value={newVehicle.battery} onChange={e=>setNewVehicle({...newVehicle,battery:e.target.value})}/>
//         <input type="number" className="form-control mb-2" placeholder="Fuel %" value={newVehicle.fuel} onChange={e=>setNewVehicle({...newVehicle,fuel:e.target.value})}/>
//         <input type="number" className="form-control mb-2" placeholder="Latitude" value={newVehicle.latitude} onChange={e=>setNewVehicle({...newVehicle,latitude:e.target.value})}/>
//         <input type="number" className="form-control mb-2" placeholder="Longitude" value={newVehicle.longitude} onChange={e=>setNewVehicle({...newVehicle,longitude:e.target.value})}/>
//         <Button className="w-100" onClick={handleAdd}>Add Vehicle</Button>
//       </div>

//       {/* Vehicle Cards */}
//       <div className="row">
//         {vehicles.map(v=>(
//           <div className="col-md-4 mb-3" key={v.id}>
//             <Card>
//               <Card.Body>
//                 <Card.Title>{v.name}</Card.Title>
//                 <Card.Text>Type: {v.type}</Card.Text>
//                 <Card.Text>Status: {v.status}</Card.Text>
//                 <Card.Text>Battery: <ProgressBar now={v.battery} label={`${v.battery}%`} /></Card.Text>
//                 <Card.Text>Fuel: <ProgressBar now={v.fuel} label={`${v.fuel}%`} /></Card.Text>
//                 <Card.Text>Location: {v.latitude}, {v.longitude}</Card.Text>
//                 <Button variant="danger" onClick={()=>handleDelete(v.id)}>Delete</Button>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// import React, { useEffect, useState } from 'react';
// import API from './api'; // Make sure api.js is in src/
// import { Card, ProgressBar, Button, Modal, Form } from 'react-bootstrap';

// export default function VehicleDashboard() {
//   const [vehicles, setVehicles] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [currentVehicle, setCurrentVehicle] = useState({
//     id: null,
//     name: '',
//     type: 'Electric',
//     status: 'Available',
//     battery: 100,
//     fuel: 100,
//     latitude: 0,
//     longitude: 0
//   });

//   // Load all vehicles
//   const loadVehicles = async () => {
//     try {
//       const res = await API.get('/api/vehicles');
//       setVehicles(res.data);
//     } catch (err) {
//       console.error(err);
//       alert('Failed to load vehicles');
//     }
//   };

//   useEffect(() => {
//     loadVehicles();
//   }, []);

//   // Add or Update vehicle
//   const handleSave = async () => {
//     try {
//       if (currentVehicle.id) {
//         // Update
//         await API.put(`/api/vehicles/${currentVehicle.id}`, currentVehicle);
//       } else {
//         // Add new
//         await API.post('/api/vehicles', currentVehicle);
//       }
//       setShowModal(false);
//       setCurrentVehicle({
//         id: null,
//         name: '',
//         type: 'Electric',
//         status: 'Available',
//         battery: 100,
//         fuel: 100,
//         latitude: 0,
//         longitude: 0
//       });
//       loadVehicles();
//     } catch (err) {
//       console.error(err);
//       alert('Error saving vehicle');
//     }
//   };

//   // Delete vehicle
//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure to delete this vehicle?')) return;
//     try {
//       await API.delete(`/api/vehicles/${id}`);
//       loadVehicles();
//     } catch (err) {
//       console.error(err);
//       alert('Failed to delete vehicle');
//     }
//   };

//   // Open modal for add/update
//   const handleEdit = (vehicle = null) => {
//     if (vehicle) setCurrentVehicle(vehicle);
//     else
//       setCurrentVehicle({
//         id: null,
//         name: '',
//         type: 'Electric',
//         status: 'Available',
//         battery: 100,
//         fuel: 100,
//         latitude: 0,
//         longitude: 0
//       });
//     setShowModal(true);
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Fleet Vehicles Dashboard</h2>
//       <Button className="mb-3" onClick={() => handleEdit()}>Add New Vehicle</Button>

//       <div className="row">
//         {vehicles.map(v => (
//           <div className="col-md-4 mb-3" key={v.id}>
//             <Card>
//               <Card.Body>
//                 <Card.Title>{v.name}</Card.Title>
//                 <Card.Text>Type: {v.type}</Card.Text>
//                 <Card.Text>Status: {v.status}</Card.Text>
//                 <Card.Text>
//                   Battery: <ProgressBar now={v.battery} label={`${v.battery}%`} />
//                 </Card.Text>
//                 <Card.Text>
//                   Fuel: <ProgressBar now={v.fuel} label={`${v.fuel}%`} />
//                 </Card.Text>
//                 <Card.Text>
//                   Location: {v.latitude}, {v.longitude}
//                 </Card.Text>
//                 <Button variant="primary" className="me-2" onClick={() => handleEdit(v)}>Edit</Button>
//                 <Button variant="danger" onClick={() => handleDelete(v.id)}>Delete</Button>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>

//       {/* Modal for Add/Update */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>{currentVehicle.id ? 'Update Vehicle' : 'Add Vehicle'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-2">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={currentVehicle.name}
//                 onChange={e => setCurrentVehicle({ ...currentVehicle, name: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group className="mb-2">
//               <Form.Label>Type</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={currentVehicle.type}
//                 onChange={e => setCurrentVehicle({ ...currentVehicle, type: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group className="mb-2">
//               <Form.Label>Status</Form.Label>
//               <Form.Select
//                 value={currentVehicle.status}
//                 onChange={e => setCurrentVehicle({ ...currentVehicle, status: e.target.value })}
//               >
//                 <option>Available</option>
//                 <option>In Use</option>
//                 <option>Needs Service</option>
//               </Form.Select>
//             </Form.Group>
//             <Form.Group className="mb-2">
//               <Form.Label>Battery %</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={currentVehicle.battery}
//                 onChange={e => setCurrentVehicle({ ...currentVehicle, battery: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group className="mb-2">
//               <Form.Label>Fuel %</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={currentVehicle.fuel}
//                 onChange={e => setCurrentVehicle({ ...currentVehicle, fuel: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group className="mb-2">
//               <Form.Label>Latitude</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={currentVehicle.latitude}
//                 onChange={e => setCurrentVehicle({ ...currentVehicle, latitude: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group className="mb-2">
//               <Form.Label>Longitude</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={currentVehicle.longitude}
//                 onChange={e => setCurrentVehicle({ ...currentVehicle, longitude: e.target.value })}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
//           <Button variant="success" onClick={handleSave}>{currentVehicle.id ? 'Update' : 'Add'}</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import API from '../api'; // Correct path: go up one folder from dashboards/
// import { Card, ProgressBar, Button, Modal, Form } from 'react-bootstrap';

// export default function VehicleDashboard() {
//   const [vehicles, setVehicles] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [currentVehicle, setCurrentVehicle] = useState({
//     id: null,
//     name: '',
//     type: 'Electric',
//     status: 'Available',
//     battery: 100,
//     fuel: 100,
//     latitude: 0,
//     longitude: 0
//   });

//   // Load all vehicles
//   const loadVehicles = async () => {
//     try {
//       const res = await API.get('/api/vehicles');
//       setVehicles(res.data);
//     } catch (err) {
//       console.error(err);
//       alert('Failed to load vehicles');
//     }
//   };

//   useEffect(() => {
//     loadVehicles();
//   }, []);

//   // Add or Update vehicle
//   const handleSave = async () => {
//     try {
//       if (currentVehicle.id) {
//         // Update
//         await API.put(`/api/vehicles/${currentVehicle.id}`, currentVehicle);
//       } else {
//         // Add new
//         await API.post('/api/vehicles', currentVehicle);
//       }
//       setShowModal(false);
//       setCurrentVehicle({
//         id: null,
//         name: '',
//         type: 'Electric',
//         status: 'Available',
//         battery: 100,
//         fuel: 100,
//         latitude: 0,
//         longitude: 0
//       });
//       loadVehicles();
//     } catch (err) {
//       console.error(err);
//       alert('Error saving vehicle');
//     }
//   };

//   // Delete vehicle
//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure to delete this vehicle?')) return;
//     try {
//       await API.delete(`/api/vehicles/${id}`);
//       loadVehicles();
//     } catch (err) {
//       console.error(err);
//       alert('Failed to delete vehicle');
//     }
//   };

//   // Open modal for add/update
//   const handleEdit = (vehicle = null) => {
//     if (vehicle) setCurrentVehicle(vehicle);
//     else
//       setCurrentVehicle({
//         id: null,
//         name: '',
//         type: 'Electric',
//         status: 'Available',
//         battery: 100,
//         fuel: 100,
//         latitude: 0,
//         longitude: 0
//       });
//     setShowModal(true);
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Fleet Vehicles Dashboard</h2>
//       <Button className="mb-3" onClick={() => handleEdit()}>Add New Vehicle</Button>

//       <div className="row">
//         {vehicles.map(v => (
//           <div className="col-md-4 mb-3" key={v.id}>
//             <Card>
//               <Card.Body>
//                 <Card.Title>{v.name}</Card.Title>
//                 <Card.Text>Type: {v.type}</Card.Text>
//                 <Card.Text>Status: {v.status}</Card.Text>
//                 <Card.Text>Battery: <ProgressBar now={v.battery} label={`${v.battery}%`} /></Card.Text>
//                 <Card.Text>Fuel: <ProgressBar now={v.fuel} label={`${v.fuel}%`} /></Card.Text>
//                 <Card.Text>Location: {v.latitude}, {v.longitude}</Card.Text>
//                 <Button variant="primary" className="me-2" onClick={() => handleEdit(v)}>Edit</Button>
//                 <Button variant="danger" onClick={() => handleDelete(v.id)}>Delete</Button>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>

//       {/* Modal for Add/Update */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>{currentVehicle.id ? 'Update Vehicle' : 'Add Vehicle'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-2">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={currentVehicle.name}
//                 onChange={e => setCurrentVehicle({ ...currentVehicle, name: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group className="mb-2">
//               <Form.Label>Type</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={currentVehicle.type}
//                 onChange={e => setCurrentVehicle({ ...currentVehicle, type: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group className="mb-2">
//               <Form.Label>Status</Form.Label>
//               <Form.Select
//                 value={currentVehicle.status}
//                 onChange={e => setCurrentVehicle({ ...currentVehicle, status: e.target.value })}
//               >
//                 <option>Available</option>
//                 <option>In Use</option>
//                 <option>Needs Service</option>
//               </Form.Select>
//             </Form.Group>
//             <Form.Group className="mb-2">
//               <Form.Label>Battery %</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={currentVehicle.battery}
//                 onChange={e => setCurrentVehicle({ ...currentVehicle, battery: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group className="mb-2">
//               <Form.Label>Fuel %</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={currentVehicle.fuel}
//                 onChange={e => setCurrentVehicle({ ...currentVehicle, fuel: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group className="mb-2">
//               <Form.Label>Latitude</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={currentVehicle.latitude}
//                 onChange={e => setCurrentVehicle({ ...currentVehicle, latitude: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group className="mb-2">
//               <Form.Label>Longitude</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={currentVehicle.longitude}
//                 onChange={e => setCurrentVehicle({ ...currentVehicle, longitude: e.target.value })}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
//           <Button variant="success" onClick={handleSave}>{currentVehicle.id ? 'Update' : 'Add'}</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import API from "../api"; // Make sure api.js points to your backend
import { Card, ProgressBar, Button, Modal, Form } from "react-bootstrap";

export default function VehicleDashboard() {
  const [vehicles, setVehicles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentVehicle, setCurrentVehicle] = useState({
    id: null,
    name: "",
    type: "Electric",
    status: "Available",
    battery: 100,
    fuel: 100,
    latitude: 0,
    longitude: 0,
  });

  // Load all vehicles from backend
  const loadVehicles = async () => {
    try {
      const res = await API.get("/api/vehicles");
      setVehicles(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load vehicles");
    }
  };

  useEffect(() => {
    loadVehicles();
  }, []);

  // Add or update vehicle
  const handleSave = async () => {
    try {
      if (currentVehicle.id) {
        await API.put(`/api/vehicles/${currentVehicle.id}`, currentVehicle);
      } else {
        await API.post("/api/vehicles", currentVehicle);
      }
      setShowModal(false);
      setCurrentVehicle({
        id: null,
        name: "",
        type: "Electric",
        status: "Available",
        battery: 100,
        fuel: 100,
        latitude: 0,
        longitude: 0,
      });
      loadVehicles();
    } catch (err) {
      console.error(err);
      alert("Error saving vehicle");
    }
  };

  // Delete vehicle
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this vehicle?")) return;
    try {
      await API.delete(`/api/vehicles/${id}`);
      loadVehicles();
    } catch (err) {
      console.error(err);
      alert("Failed to delete vehicle");
    }
  };

  // Open modal for add/update
  const handleEdit = (vehicle = null) => {
    if (vehicle) setCurrentVehicle(vehicle);
    else
      setCurrentVehicle({
        id: null,
        name: "",
        type: "Electric",
        status: "Available",
        battery: 100,
        fuel: 100,
        latitude: 0,
        longitude: 0,
      });
    setShowModal(true);
  };

  return (
    <div className="container mt-4">
      <h2>Fleet Vehicles Dashboard</h2>
      <Button className="mb-3" onClick={() => handleEdit()}>
        Add Vehicle
      </Button>

      <div className="row">
        {vehicles.map((v) => (
          <div className="col-md-4 mb-3" key={v.id}>
            <Card>
              <Card.Body>
                <Card.Title>{v.name}</Card.Title>
                <Card.Text>Type: {v.type}</Card.Text>
                <Card.Text>Status: {v.status}</Card.Text>
                <Card.Text>
                  Battery: <ProgressBar now={v.battery} label={`${v.battery}%`} />
                </Card.Text>
                <Card.Text>
                  Fuel: <ProgressBar now={v.fuel} label={`${v.fuel}%`} />
                </Card.Text>
                <Card.Text>
                  Location: {v.latitude}, {v.longitude}
                </Card.Text>
                <Button variant="primary" className="me-2" onClick={() => handleEdit(v)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(v.id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal for Add/Update Vehicle */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{currentVehicle.id ? "Update Vehicle" : "Add Vehicle"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={currentVehicle.name}
                onChange={(e) => setCurrentVehicle({ ...currentVehicle, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                value={currentVehicle.type}
                onChange={(e) => setCurrentVehicle({ ...currentVehicle, type: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={currentVehicle.status}
                onChange={(e) => setCurrentVehicle({ ...currentVehicle, status: e.target.value })}
              >
                <option>Available</option>
                <option>In Use</option>
                <option>Needs Service</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Battery %</Form.Label>
              <Form.Control
                type="number"
                value={currentVehicle.battery}
                onChange={(e) => setCurrentVehicle({ ...currentVehicle, battery: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Fuel %</Form.Label>
              <Form.Control
                type="number"
                value={currentVehicle.fuel}
                onChange={(e) => setCurrentVehicle({ ...currentVehicle, fuel: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Latitude</Form.Label>
              <Form.Control
                type="number"
                value={currentVehicle.latitude}
                onChange={(e) => setCurrentVehicle({ ...currentVehicle, latitude: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Longitude</Form.Label>
              <Form.Control
                type="number"
                value={currentVehicle.longitude}
                onChange={(e) => setCurrentVehicle({ ...currentVehicle, longitude: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSave}>
            {currentVehicle.id ? "Update" : "Add"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
