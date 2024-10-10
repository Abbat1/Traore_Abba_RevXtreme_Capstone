package com.example.Backend_For_Captsone;

import com.example.Backend_For_Captsone.common.CarRepository;
import com.example.Backend_For_Captsone.model.Cars;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@ActiveProfiles("test")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class CarRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private CarRepository carRepository;

    @Test
    void testSaveAndFindById() {
        // Create a new car
        Cars car = new Cars(null, "Test Car", "TestMake", "TestModel", 2023, "V6", "Red",
                10000, 300, "AWD", "50000", "Automatic", "http://example.com/car.jpg");

        // Save the car
        Cars savedCar = carRepository.save(car);

        // Find the car by ID
        Optional<Cars> foundCar = carRepository.findById(savedCar.getId());

        assertThat(foundCar).isPresent();
        assertThat(foundCar.get().getName()).isEqualTo("Test Car");
    }

    @Test
    void testFindAll() {
        // Create and save multiple cars
        Cars car1 = new Cars(null, "Car 1", "Make1", "Model1", 2021, "V4", "Blue",
                5000, 200, "FWD", "30000", "Manual", "http://example.com/car1.jpg");
        Cars car2 = new Cars(null, "Car 2", "Make2", "Model2", 2022, "V6", "Red",
                8000, 250, "RWD", "40000", "Automatic", "http://example.com/car2.jpg");

        entityManager.persist(car1);
        entityManager.persist(car2);
        entityManager.flush();

        // Find all cars
        List<Cars> allCars = carRepository.findAll();

        assertThat(allCars).hasSize(2);
        assertThat(allCars).extracting(Cars::getName).containsExactlyInAnyOrder("Car 1", "Car 2");
    }

    @Test
    void testDeleteById() {
        // Create and save a car
        Cars car = new Cars(null, "Car to Delete", "MakeX", "ModelX", 2020, "V8", "Black",
                15000, 350, "AWD", "60000", "Automatic", "http://example.com/carX.jpg");
        Cars savedCar = entityManager.persist(car);
        entityManager.flush();

        // Delete the car
        carRepository.deleteById(savedCar.getId());

        // Try to find the deleted car
        Optional<Cars> deletedCar = carRepository.findById(savedCar.getId());

        assertThat(deletedCar).isEmpty();
    }

    @Test
    void testUpdateCar() {
        // Create and save a car
        Cars car = new Cars(null, "Original Car", "OriginalMake", "OriginalModel", 2019, "V6", "White",
                20000, 280, "FWD", "35000", "Manual", "http://example.com/original.jpg");
        Cars savedCar = entityManager.persist(car);
        entityManager.flush();

        // Update the car
        savedCar.setName("Updated Car");
        savedCar.setMileage(25000);
        carRepository.save(savedCar);

        // Find the updated car
        Optional<Cars> updatedCar = carRepository.findById(savedCar.getId());

        assertThat(updatedCar).isPresent();
        assertThat(updatedCar.get().getName()).isEqualTo("Updated Car");
        assertThat(updatedCar.get().getMileage()).isEqualTo(25000);
    }
}