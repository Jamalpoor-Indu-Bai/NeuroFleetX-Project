package com.infosys.neurofleetxbackend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "vehicles")
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false)
    private String name;

    @NotBlank
    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private String status = "Available";

    @NotNull
    private Double battery;

    @NotNull
    private Double fuel;

    @NotNull
    private Double latitude;

    @NotNull
    private Double longitude;

    public Vehicle() {}

    public Vehicle(String name, String type, String status, Double battery, Double fuel, Double latitude, Double longitude) {
        this.name = name;
        this.type = type;
        this.status = status;
        this.battery = battery;
        this.fuel = fuel;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    // getters & setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public Double getBattery() { return battery; }
    public void setBattery(Double battery) { this.battery = battery; }
    public Double getFuel() { return fuel; }
    public void setFuel(Double fuel) { this.fuel = fuel; }
    public Double getLatitude() { return latitude; }
    public void setLatitude(Double latitude) { this.latitude = latitude; }
    public Double getLongitude() { return longitude; }
    public void setLongitude(Double longitude) { this.longitude = longitude; }
}
