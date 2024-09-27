package com.example.Backend_For_Captsone.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "cars")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cars {
    @Id  @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String transmission;
    @Column
    private String name;
    @Column
    private String make;
    @Column
    private Integer model;
    @Column
    private Integer year;
    @Column
    private Integer hp;
    @Column
    private String drivetrain;
    @Column
    private Integer price;
}
