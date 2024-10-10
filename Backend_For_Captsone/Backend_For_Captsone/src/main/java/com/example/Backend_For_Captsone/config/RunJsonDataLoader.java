package com.example.Backend_For_Captsone.config;

import com.fasterxml.jackson.core.type.TypeReference;
import com.example.Backend_For_Captsone.common.CarRepository;
import com.example.Backend_For_Captsone.model.Cars;
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

    // Logger for logging messages
    private final Logger logger = LoggerFactory.getLogger(RunJsonDataLoader.class);

    // Repository to interact with the Cars table in the database
    private final CarRepository carRepository;

    // ObjectMapper to parse JSON data
    final ObjectMapper objectMapper;

    // Constructor to initialize the CarRepository and ObjectMapper
    public RunJsonDataLoader(CarRepository carRepository, ObjectMapper objectMapper) {
        this.carRepository = carRepository;
        this.objectMapper = objectMapper;
    }

    // Method to be executed when the application starts
    @Override
    public void run(String... args) throws Exception {
        // Check if the Cars table is empty
        if (carRepository.count() == 0) {
            // Load data from the JSON file
            try (InputStream inputStream = getClass().getResourceAsStream("/data/cars.json")) {
                // Parse the JSON file into a list of Cars objects
                List<Cars> cars = objectMapper.readValue(inputStream, new TypeReference<List<Cars>>() {});
                // Log the loaded cars
                logger.info("Cars loaded from JSON File: {}", cars);
                // Save the cars to the database
                carRepository.saveAll(cars);
            } catch (IOException e) {
                // Throw a runtime exception if there is an error loading the JSON file
                throw new RuntimeException("Unable to load from JSON file,", e);
            }
        } else {
            // Log a message if the data is already loaded
            logger.info("Data already loaded");
        }
    }
}