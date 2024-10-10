package com.example.Backend_For_Captsone.controller;

import com.example.Backend_For_Captsone.common.CarRepository;
import com.example.Backend_For_Captsone.model.Cars;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RequestMapping("/api")
@RestController
public class CarController {

    // Injecting the CarRepository to interact with the Cars table in the database
    private final CarRepository carRepository;

    // Constructor to initialize the CarRepository
    @Autowired
    public CarController(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    // Endpoint to get all cars
    @GetMapping("/cars")
    public List<Cars> getAllCars() {
        // Fetching all cars from the database
        return carRepository.findAll();
    }

    // Endpoint to update a car by its ID
    @PutMapping("/cars/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateCar(@RequestBody Cars car, @PathVariable Integer id) {
        // Finding the car by ID and updating its details if it exists
        carRepository.findById(id).ifPresent(existingCar -> {
            existingCar.setTransmission(car.getTransmission());
            existingCar.setName(car.getName());
            existingCar.setMake(car.getMake());
            existingCar.setModel(car.getModel());
            existingCar.setYear(car.getYear());
            existingCar.setEngine(car.getEngine());
            existingCar.setColor(car.getColor());
            existingCar.setMileage(car.getMileage());
            existingCar.setHorsepower(car.getHorsepower());
            existingCar.setDrivetrain(car.getDrivetrain());
            existingCar.setPrice(car.getPrice());
            existingCar.setUrl(car.getUrl());
            // Saving the updated car back to the database
            carRepository.save(existingCar);
        });
    }

    // Endpoint to get a car by its ID
    @GetMapping("/cars/{id}")
    public ResponseEntity<Cars> getProductById(@PathVariable Integer id) {
        // Finding the car by ID and returning it
        Cars car = carRepository.findById(id).orElse(null);
        return ResponseEntity.ok(car);
    }

    @PostMapping
    public ResponseEntity<Cars> addCar(@RequestBody Cars car) {
        // Saving the new car to the database
        Cars newCar = carRepository.save(car);
        return ResponseEntity.ok(newCar);
    }

    @DeleteMapping("/cars/{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable Integer id) {
        // Deleting the car by its ID
        carRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
