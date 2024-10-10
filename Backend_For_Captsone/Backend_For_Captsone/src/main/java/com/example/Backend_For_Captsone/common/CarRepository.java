package com.example.Backend_For_Captsone.common;

import com.example.Backend_For_Captsone.model.Cars;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CarRepository extends JpaRepository<Cars, Integer> {

    // JpaRepository provides basic CRUD operations and more for the Cars entity.
    // The Integer type parameter specifies the type of the primary key of the Cars entity.

    // Uncomment and implement the following methods if custom queries or operations are needed:

    // Find a car by its name
    // String findByName(String name);

    // Create a new car entry
    // void create(Cars cars);

    // Find a car by its ID
    // Optional<Cars> findByID(Integer id);

    // Update an existing car entry
    // void update(Cars cars, Integer id);

    // Delete a car entry by its ID
    // void delete(Integer id);
}