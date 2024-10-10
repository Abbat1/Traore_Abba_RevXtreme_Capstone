package com.example.Backend_For_Captsone.common;

import com.example.Backend_For_Captsone.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

    // Find a list of users by their name
    // This method will generate a query to find users with the specified name
    List<User> findByName(String name);

    // Find a user by their email
    // This method will generate a query to find a user with the specified email
    User findByEmail(String email);

    // Find a list of users by their password
    // This method will generate a query to find users with the specified password
    List<User> findByPassword(String password);
}