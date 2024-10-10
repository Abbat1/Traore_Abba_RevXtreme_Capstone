package com.example.Backend_For_Captsone.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    // Override the addCorsMappings method to configure CORS settings
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Allow CORS requests from any origin to any endpoint
        registry.addMapping("/**");
    }
}

// The following commented-out code provides additional CORS configuration options:
// .allowedOrigins("http://localhost:5173") // Allow your frontend's origin
// .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Specify allowed methods
// .allowCredentials(true); // Allow cookies or authentication
