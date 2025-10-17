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
    @Lob  // ✅ FIXED: LONGBLOB for huge Base64 images
    @Column(length = 16777215) // 16MB max
    private String image;
}