package com.example.Backend_For_Captsone.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.*;

@AllArgsConstructor // Lombok annotation to generate a constructor with all fields
@Data // Lombok annotation to generate getters, setters, toString, equals, and hashCode methods
@NoArgsConstructor // Lombok annotation to generate a no-argument constructor
@Entity // Specifies that the class is an entity and is mapped to a database table
@Table(name="cars") // Specifies the name of the database table to be used for mapping
public class Cars {

    @Id // Specifies the primary key of an entity
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Provides the specification of generation strategies for the values of primary keys
    private Integer id; // Unique identifier for each car

    private String name; // Name of the car
    private String make; // Manufacturer of the car
    private String model; // Model of the car
    private Integer year; // Year the car was manufactured
    private String engine; // Engine type of the car
    private String color; // Color of the car
    private Integer mileage; // Mileage of the car
    private Integer horsepower; // Horsepower of the car
    private String drivetrain; // Drivetrain type of the car (e.g., FWD, RWD, AWD)
    private String price; // Price of the car
    private String transmission; // Transmission type of the car (e.g., automatic, manual)
    private String url; // URL for the car's image or details



    // Getters and setters for all fields including the new 'url' field
    // The @Data annotation from Lombok generates these methods automatically
}
   /* public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getEngine() {
        return engine;
    }

    public void setEngine(String engine) {
        this.engine = engine;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Integer getMileage() {
        return mileage;
    }

    public void setMileage(Integer mileage) {
        this.mileage = mileage;
    }

    public Integer getHorsepower() {
        return horsepower;
    }

    public void setHorsepower(Integer horsepower) {
        this.horsepower = horsepower;
    }

    public String getDrivetrain() {
        return drivetrain;
    }

    public void setDrivetrain(String drivetrain) {
        this.drivetrain = drivetrain;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}*/
