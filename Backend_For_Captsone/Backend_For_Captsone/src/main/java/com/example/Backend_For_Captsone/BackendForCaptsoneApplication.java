package com.example.Backend_For_Captsone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Main class to bootstrap the Spring Boot application
@SpringBootApplication // This annotation denotes a configuration class that declares one or more @Bean methods and also triggers auto-configuration and component scanning
public class BackendForCaptsoneApplication {

	// Main method to run the Spring Boot application
	public static void main(String[] args) {
		// SpringApplication.run() method launches the application
		SpringApplication.run(BackendForCaptsoneApplication.class, args);
	}
}
