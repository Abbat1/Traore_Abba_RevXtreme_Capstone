package com.example.Backend_For_Captsone.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");}}
// Allows all endpoints
        //.allowedOrigins("http://localhost:5173")
        // Allow your frontend's origin .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
        // Specify allowed methods
        // .allowCredentials(true);
        // Allow cookies or authentication
        // }}

