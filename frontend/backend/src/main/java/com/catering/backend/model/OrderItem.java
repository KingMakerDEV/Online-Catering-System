package com.catering.backend.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private MenuItem menuItem;
    @ManyToOne
    @JsonIgnore
    private CustomerOrder order;
    private int quantity;

}