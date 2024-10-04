package com.example.Backend_For_Captsone.common;

import com.example.Backend_For_Captsone.model.Cars;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CarRepository extends JpaRepository<Cars, Integer> {

//  String findByName(String name);
//
//   void create(Cars cars);
//
//   Optional<Cars> findByID(Integer id);
//
//   void update(Cars cars, Integer id);
//
//   void delete(Integer id);
}
