package com.catering.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class MenuItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double price;
    private String description;
    @Lob
    @com.fasterxml.jackson.annotation.JsonIgnore   // ✅ add this
    private byte[] image;



}