package com.catering.backend.controller;

import com.catering.backend.model.CustomerOrder;
import com.catering.backend.model.OrderItem;
import com.catering.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    // Place a new order
    @PostMapping
    public ResponseEntity<CustomerOrder> placeOrder(@RequestBody List<OrderItem> items) {
        System.out.println("📥 Received order items: " + items.size());
        CustomerOrder order = orderService.placeOrder(items); // ✅ only pass items
        return ResponseEntity.ok(order);
    }

    // Get all orders for the authenticated user
    @GetMapping
    public ResponseEntity<List<CustomerOrder>> getOrders() {
        List<CustomerOrder> orders = orderService.getUserOrders();
        return ResponseEntity.ok(orders);
    }
}
