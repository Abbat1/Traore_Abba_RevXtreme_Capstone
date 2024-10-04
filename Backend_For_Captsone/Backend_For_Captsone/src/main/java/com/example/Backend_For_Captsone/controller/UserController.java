package com.example.Backend_For_Captsone.controller;

import com.example.Backend_For_Captsone.common.UserRepo;
import com.example.Backend_For_Captsone.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {
    private final UserRepo userRepo;

    public UserController(UserRepo userRepo) {

        this.userRepo = userRepo;
    }
//
//    @GetMapping("/Login")
//    public List<User> getAllUsers() {
//        List<User> user = userRepo.findAll();
//        return user;
//    }
    @PostMapping("/Login")
    @ResponseStatus(HttpStatus.OK)
    public User getUserByEmail(@RequestBody User user) {
        User foundUser = userRepo.findByEmail(user.getEmail());
//
//        if (user.isEmpty()) {
//            throw new RuntimeException("User not found for email: " + email);
//        }

        return foundUser;
    }

    // Post a new account
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/SignUp")
    void createUsers(@RequestBody User user) {
        userRepo.save(user);
    }

    // Delete a user account
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void deleteUsers(@PathVariable Integer id) {
        userRepo.deleteById(id);
    }
}
