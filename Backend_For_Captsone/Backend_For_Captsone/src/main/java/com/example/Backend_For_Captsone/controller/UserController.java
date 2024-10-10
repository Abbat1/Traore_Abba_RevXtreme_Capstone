package com.example.Backend_For_Captsone.controller;

import com.example.Backend_For_Captsone.common.UserRepo;
import com.example.Backend_For_Captsone.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin // Allow cross-origin requests
@RestController // Mark this class as a REST controller
@RequestMapping("/api") // Base URL for all endpoints in this controller
public class UserController {

    // Injecting the UserRepo to interact with the User table in the database
    private final UserRepo userRepo;

    // Constructor to initialize the UserRepo
    public UserController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    // Endpoint to log in a user by their email
    @PostMapping("/Login")
    @ResponseStatus(HttpStatus.OK) // Return HTTP 200 OK status
    public User getUserByEmail(@RequestBody User user) {
        // Find the user by email
        User foundUser = userRepo.findByEmail(user.getEmail());
        return foundUser;
    }

    // Endpoint to create a new user account
    @ResponseStatus(HttpStatus.CREATED) // Return HTTP 201 Created status
    @PostMapping("/SignUp")
    void createUsers(@RequestBody User user) {
        // Save the new user to the database
        userRepo.save(user);
    }

    // Endpoint to delete a user account by their ID
    @ResponseStatus(HttpStatus.NO_CONTENT) // Return HTTP 204 No Content status
    @DeleteMapping("/{id}")
    void deleteUsers(@PathVariable Integer id) {
        // Delete the user by ID
        userRepo.deleteById(id);
    }
}