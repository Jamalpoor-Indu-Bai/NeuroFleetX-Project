package com.infosys.neurofleetxbackend.repository;

import com.infosys.neurofleetxbackend.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    // add query methods if needed
}
