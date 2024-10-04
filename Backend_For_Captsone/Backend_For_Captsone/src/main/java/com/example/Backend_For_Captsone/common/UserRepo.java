package com.example.Backend_For_Captsone.common;

import com.example.Backend_For_Captsone.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
    List<User> findByName(String name);
    User findByEmail(String email);
    List<User>  findByPassword(String password);
}
