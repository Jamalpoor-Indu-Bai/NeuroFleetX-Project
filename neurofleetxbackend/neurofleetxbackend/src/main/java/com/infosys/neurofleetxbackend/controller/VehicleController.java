package com.infosys.neurofleetxbackend.controller;

import com.infosys.neurofleetxbackend.model.Vehicle;
import com.infosys.neurofleetxbackend.repository.VehicleRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
@CrossOrigin(origins = "http://localhost:5173")
public class VehicleController {

    private final VehicleRepository vehicleRepository;
    public VehicleController(VehicleRepository vehicleRepository) { this.vehicleRepository = vehicleRepository; }

    @PostMapping
    public ResponseEntity<Vehicle> addVehicle(@Valid @RequestBody Vehicle vehicle) {
        Vehicle saved = vehicleRepository.save(vehicle);
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public ResponseEntity<List<Vehicle>> getAll() {
        return ResponseEntity.ok(vehicleRepository.findAll());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Vehicle> update(@PathVariable Long id, @Valid @RequestBody Vehicle v) {
        return vehicleRepository.findById(id).map(vehicle -> {
            vehicle.setName(v.getName());
            vehicle.setType(v.getType());
            vehicle.setStatus(v.getStatus());
            vehicle.setBattery(v.getBattery());
            vehicle.setFuel(v.getFuel());
            vehicle.setLatitude(v.getLatitude());
            vehicle.setLongitude(v.getLongitude());
            return ResponseEntity.ok(vehicleRepository.save(vehicle));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        vehicleRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
