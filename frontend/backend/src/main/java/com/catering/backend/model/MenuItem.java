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
    private String description;
    private Double price;
    private String imageUrl; // instead of blob

    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    @Lob
    @com.fasterxml.jackson.annotation.JsonIgnore   // ✅ add this
    private byte[] image;



}