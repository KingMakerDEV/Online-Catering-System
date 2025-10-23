//package com.catering.backend.controller;
//
//import com.catering.backend.DTO.OrderConfirmationRequest;
//import com.catering.backend.model.CustomerOrder;
//import com.catering.backend.model.OrderItem;
//import com.catering.backend.service.OrderService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/orders")
//public class OrderController {
//
//    @Autowired
//    private OrderService orderService;
//
//    // Place a new order
//    @PostMapping
//    public ResponseEntity<CustomerOrder> placeOrder(@RequestBody List<OrderItem> items) {
//        System.out.println("📥 Received order items: " + items.size());
//        CustomerOrder order = orderService.placeOrder(items); // ✅ only pass items
//        return ResponseEntity.ok(order);
//    }
//    @PostMapping("/orders/{id}/confirm")
//    public ResponseEntity<?> confirmOrder(
//            @PathVariable Long id,
//            @RequestBody OrderConfirmationRequest request
//    ){
//
//    }
//
//
//    // Get all orders for the authenticated user
//    @GetMapping
//    public ResponseEntity<List<CustomerOrder>> getOrders() {
//        List<CustomerOrder> orders = orderService.getUserOrders();
//        return ResponseEntity.ok(orders);
//    }
//}

package com.catering.backend.controller;

import com.catering.backend.DTO.OrderConfirmationRequest;
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

    @PostMapping("/{id}/confirm")

    public ResponseEntity<?> confirmOrder(
            @PathVariable Long id,
            @RequestBody OrderConfirmationRequest request
    ) {
        try {
            boolean success = orderService.confirmOrder(id, request);
            if (success) {
                return ResponseEntity.ok("✅ Order confirmed and email sent.");
            } else {
                return ResponseEntity.badRequest().body("❌ Order could not be confirmed.");
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error: " + e.getMessage());
        }
    }

    // Get all orders for the authenticated user
    @GetMapping
    public ResponseEntity<List<CustomerOrder>> getOrders() {
        List<CustomerOrder> orders = orderService.getUserOrders();
        return ResponseEntity.ok(orders);
    }
}

