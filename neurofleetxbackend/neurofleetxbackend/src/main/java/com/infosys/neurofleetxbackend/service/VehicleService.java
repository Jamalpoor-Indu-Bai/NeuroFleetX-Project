//package com.infosys.neurofleetxbackend.service;
//
//import com.infosys.neurofleetxbackend.model.Vehicle;
//import com.infosys.neurofleetxbackend.repository.VehicleRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class VehicleService {
//    private final VehicleRepository vehicleRepo;
//
//    public VehicleService(VehicleRepository vehicleRepo) {
//        this.vehicleRepo = vehicleRepo;
//    }
//
//    public Vehicle save(Vehicle vehicle) {
//        return vehicleRepo.save(vehicle);
//    }
//
//    public List<Vehicle> getAll() {
//        return vehicleRepo.findAll();
//    }
//
//    public Vehicle update(Long id, Vehicle newData) {
//        Vehicle v = vehicleRepo.findById(id).orElseThrow();
//        v.setType(newData.getType());
//        v.setStatus(newData.getStatus());
//        v.setBatteryLevel(newData.getBatteryLevel());
//        v.setFuelLevel(newData.getFuelLevel());
//        v.setLatitude(newData.getLatitude());
//        v.setLongitude(newData.getLongitude());
//        return vehicleRepo.save(v);
//    }
//
//    public void delete(Long id) {
//        vehicleRepo.deleteById(id);
//    }
//}
//
