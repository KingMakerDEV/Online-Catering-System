package com.catering.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.HashSet;
import java.util.Set;

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

    // ✅ Corrected: only one eventTypes field with proper mapping
    @ElementCollection(targetClass = EventType.class)
    @Enumerated(EnumType.STRING)
    @CollectionTable(
            name = "menu_item_events",
            joinColumns = @JoinColumn(name = "menu_item_id")
    )
    @Column(name = "event_type")
    private Set<EventType> eventTypes = new HashSet<>();

    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public Set<EventType> getEventTypes() { return eventTypes; }
    public void setEventTypes(Set<EventType> eventTypes) { this.eventTypes = eventTypes; }

    @Lob
    @com.fasterxml.jackson.annotation.JsonIgnore   // ✅ keep image ignored in JSON
    private byte[] image;
}
