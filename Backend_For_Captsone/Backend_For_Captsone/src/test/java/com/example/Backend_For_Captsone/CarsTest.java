package com.example.Backend_For_Captsone;

import com.example.Backend_For_Captsone.model.Cars;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CarsTest {

    @Test
    void testNoArgsConstructor() {
        Cars car = new Cars();
        assertNotNull(car);
    }

    @Test
    void testAllArgsConstructor() {
        Cars car = new Cars(1, "Test Car", "TestMake", "TestModel", 2023, "V6", "Red",
                10000, 300, "AWD", "50000", "Automatic", "http://example.com/car.jpg");

        assertNotNull(car);
        assertEquals(1, car.getId());
        assertEquals("Test Car", car.getName());
        assertEquals("TestMake", car.getMake());
        assertEquals("TestModel", car.getModel());
        assertEquals(2023, car.getYear());
        assertEquals("V6", car.getEngine());
        assertEquals("Red", car.getColor());
        assertEquals(10000, car.getMileage());
        assertEquals(300, car.getHorsepower());
        assertEquals("AWD", car.getDrivetrain());
        assertEquals("50000", car.getPrice());
        assertEquals("Automatic", car.getTransmission());
        assertEquals("http://example.com/car.jpg", car.getUrl());
    }

    @Test
    void testSettersAndGetters() {
        Cars car = new Cars();

        car.setId(2);
        car.setName("Another Car");
        car.setMake("AnotherMake");
        car.setModel("AnotherModel");
        car.setYear(2022);
        car.setEngine("V8");
        car.setColor("Blue");
        car.setMileage(5000);
        car.setHorsepower(400);
        car.setDrivetrain("RWD");
        car.setPrice("60000");
        car.setTransmission("Manual");
        car.setUrl("http://example.com/another-car.jpg");

        assertEquals(2, car.getId());
        assertEquals("Another Car", car.getName());
        assertEquals("AnotherMake", car.getMake());
        assertEquals("AnotherModel", car.getModel());
        assertEquals(2022, car.getYear());
        assertEquals("V8", car.getEngine());
        assertEquals("Blue", car.getColor());
        assertEquals(5000, car.getMileage());
        assertEquals(400, car.getHorsepower());
        assertEquals("RWD", car.getDrivetrain());
        assertEquals("60000", car.getPrice());
        assertEquals("Manual", car.getTransmission());
        assertEquals("http://example.com/another-car.jpg", car.getUrl());
    }

    @Test
    void testEqualsAndHashCode() {
        Cars car1 = new Cars(1, "Test Car", "TestMake", "TestModel", 2023, "V6", "Red",
                10000, 300, "AWD", "50000", "Automatic", "http://example.com/car.jpg");
        Cars car2 = new Cars(1, "Test Car", "TestMake", "TestModel", 2023, "V6", "Red",
                10000, 300, "AWD", "50000", "Automatic", "http://example.com/car.jpg");
        Cars car3 = new Cars(2, "Another Car", "AnotherMake", "AnotherModel", 2022, "V8", "Blue",
                5000, 400, "RWD", "60000", "Manual", "http://example.com/another-car.jpg");

        assertEquals(car1, car2);
        assertNotEquals(car1, car3);
        assertEquals(car1.hashCode(), car2.hashCode());
        assertNotEquals(car1.hashCode(), car3.hashCode());
    }

    @Test
    void testToString() {
        Cars car = new Cars(1, "Test Car", "TestMake", "TestModel", 2023, "V6", "Red",
                10000, 300, "AWD", "50000", "Automatic", "http://example.com/car.jpg");

        String toString = car.toString();
        assertTrue(toString.contains("id=1"));
        assertTrue(toString.contains("name=Test Car"));
        assertTrue(toString.contains("make=TestMake"));
        assertTrue(toString.contains("model=TestModel"));
        assertTrue(toString.contains("year=2023"));
        assertTrue(toString.contains("engine=V6"));
        assertTrue(toString.contains("color=Red"));
        assertTrue(toString.contains("mileage=10000"));
        assertTrue(toString.contains("horsepower=300"));
        assertTrue(toString.contains("drivetrain=AWD"));
        assertTrue(toString.contains("price=50000"));
        assertTrue(toString.contains("transmission=Automatic"));
        assertTrue(toString.contains("url=http://example.com/car.jpg"));
    }
}