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

    private final CarRepository carRepository;


    @GetMapping("/cars")
    public List<Cars> getAllCars() {
        return carRepository.findAll();
    }

    @Autowired
    public CarController(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @PutMapping("/cars/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateCar(@RequestBody Cars car, @PathVariable Integer id) {
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
            carRepository.save(existingCar);
        });
    }
//
//    // getting all of our timesheets
//    @GetMapping("")
//    public List<Cars> home(){
//
//        return carRepository.findAll();
//    }
//
//    // Post a Timesheet
//    @ResponseStatus(HttpStatus.CREATED)
//    @PostMapping("")
//    void CreateCars(@RequestBody Cars cars){
//        carRepository.Create(cars);
//
//    }
//    //
//   // Get Item by id
    @GetMapping("/cars/{id}")
    public ResponseEntity<Cars> getProductById(@PathVariable Integer id) {
        Cars car = carRepository.findById(id).orElse(null);
        return ResponseEntity.ok(car);
    }

//    Cars getCarsByID(@PathVariable Integer id){
//
//        Optional<Cars> cars = carRepository.findById(id);
//
//        if(cars.isEmpty()){
//            throw new RuntimeException();
//        }
//
//        return cars.get();
//
//    }
//    //
////    @GetMapping("/locations/{location}")
////    List<Timesheet> getTimesheetByLocation(@PathVariable String location){
////        return timesheetRepository.findByLocation(location);
////    }
////
//    // Put a Timesheet
//    @ResponseStatus(HttpStatus.NO_CONTENT)
//    @PutMapping("/{id}")
//    void updateCars(@RequestBody Cars cars,
//                         @PathVariable Integer id){
//
//        carRepository.update(cars,id);
//    }
//    //
////
////    // Delete a Timesheet
//    @ResponseStatus(HttpStatus.NO_CONTENT)
//    @DeleteMapping("/{id}")
//    void deleteCars(@PathVariable Integer id){
//
//        carRepository.delete(id);
//    }
}
