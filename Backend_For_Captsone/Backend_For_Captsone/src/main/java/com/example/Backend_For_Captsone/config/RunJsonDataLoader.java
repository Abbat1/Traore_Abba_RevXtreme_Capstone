package com.example.Backend_For_Captsone.config;

/*import com.fasterxml.jackson.core.type.TypeReference;
import com.example.Backend_For_Capstone.common.CarRepository;
import com.example.Backend_For_Capstone.model.Cars;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.slf4j.Logger;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Configuration
public class RunJsonDataLoader implements CommandLineRunner {

    //Implement this method to load the daa from the json file
    private final Logger logger = (Logger) LoggerFactory.getLogger(RunJsonDataLoader.class);
    private final CarRepository carRepository;
    final ObjectMapper objectMapper;

    public RunJsonDataLoader(CarRepository carRepository, ObjectMapper objectMapper) {
        this.carRepository = carRepository;
        this.objectMapper = objectMapper;
    }
    @Override
    public void run(String... args) throws Exception {

        if(carRepository.count() == 0) {
            //implement this ,method to load data from the json file
            try(InputStream inputStream = getClass().getResourceAsStream("/data/cars.json")) {
                List<Cars> cars = objectMapper.readValue( inputStream, new TypeReference<List<Cars>>() {});
                logger.info("Cars loaded from JSON File: {}", cars);
                carRepository.saveAll(cars);

            }catch (IOException e) {
                throw new RuntimeException("Unable to load from JSON file,");
            }
        }else{
            logger.info("Data already loaded");
        }
    }
}*/


import com.fasterxml.jackson.core.type.TypeReference;
import com.example.Backend_For_Captsone.common.CarRepository;
import com.example.Backend_For_Captsone.model.Cars;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.slf4j.Logger;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Configuration
public class RunJsonDataLoader implements CommandLineRunner {

    // Corrected logger initialization
    private final Logger logger = LoggerFactory.getLogger(RunJsonDataLoader.class);
    private final CarRepository carRepository;
    final ObjectMapper objectMapper;

@Autowired
    public RunJsonDataLoader(CarRepository carRepository, ObjectMapper objectMapper) {
        this.carRepository = carRepository;
        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) throws Exception {
        if (carRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/cars.json")) {
                List<Cars> cars = objectMapper.readValue(inputStream, new TypeReference<List<Cars>>() {});
                logger.info("Cars loaded from JSON File: {}", cars);
                carRepository.saveAll(cars);
            } catch (IOException e) {
                throw new RuntimeException("Unable to load from JSON file,", e);
            }
        } else {
            logger.info("Data already loaded");
        }
    }
}