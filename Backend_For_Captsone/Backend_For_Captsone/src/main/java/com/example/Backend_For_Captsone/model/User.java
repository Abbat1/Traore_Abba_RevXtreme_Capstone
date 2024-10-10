package com.example.Backend_For_Captsone.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor // Lombok annotation to generate a constructor with all fields
@Data // Lombok annotation to generate getters, setters, toString, equals, and hashCode methods
@NoArgsConstructor // Lombok annotation to generate a no-argument constructor
@Entity // Specifies that the class is an entity and is mapped to a database table
@Table(name = "user") // Specifies the name of the database table to be used for mapping
public class User {

    @Id // Specifies the primary key of an entity
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Provides the specification of generation strategies for the values of primary keys
    private Integer id; // Unique identifier for each user

    private String name; // Name of the user
    private String email; // Email of the user
    private String password; // Password of the user

    // Getters and setters for all fields
    // The @Data annotation from Lombok generates these methods automatically
}