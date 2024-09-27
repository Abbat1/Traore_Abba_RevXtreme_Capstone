package com.example.Backend_For_Captsone.controller;

import com.example.Backend_For_Captsone.common.CarRepository;
import com.example.Backend_For_Captsone.model.Cars;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api/timesheets")
@RestController
public class CarController {

    private final CarRepository carRepository;

    @Autowired
    public CarController(CarRepository carRepository) {
        this.carRepository = carRepository;
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
////    // Get Item by id
//    @GetMapping("/{id}")
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
