package com.example.Backend_For_Captsone.config;

import jakarta.annotation.PreDestroy;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.Statement;

@Configuration
public class DatabaseCleanUp {

    // Injecting the DataSource bean to be used for database connections
    @Autowired
    private DataSource dataSource;

    // Defining a bean for DatabaseCleanup to be managed by Spring
    @Bean
    public DatabaseCleanup databaseCleanup() {
        return new DatabaseCleanup(dataSource);
    }

    // Inner static class to handle database cleanup operations
    public static class DatabaseCleanup {

        // DataSource to be used for obtaining database connections
        private DataSource dataSource;

        // Logger for logging messages
        private final Logger logger = org.slf4j.LoggerFactory.getLogger(DatabaseCleanup.class);

        // Constructor to initialize the DataSource
        public DatabaseCleanup(DataSource dataSource) {
            this.dataSource = dataSource;
        }

        // Method annotated with @PreDestroy to be called before the bean is destroyed
        @PreDestroy
        public void dropDatabaseTable() {
            // Implement this method to drop the table
            try (Connection connection = dataSource.getConnection()) {
                // Creating a statement to execute SQL queries
                Statement statement = connection.createStatement();
                // Executing the SQL query to drop the table if it exists
                statement.executeUpdate("DROP TABLE IF EXISTS cars");
                // Logging a success message
                logger.info("Table dropped successfully");
            } catch (Exception e) {
                // Logging the exception stack trace in case of an error
                e.printStackTrace();
            }
        }
    }
}
