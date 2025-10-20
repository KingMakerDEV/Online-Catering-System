package com.catering.backend.controller;

import com.catering.backend.model.CustomerOrder;
import com.catering.backend.model.OrderItem;
import com.catering.backend.model.User;
import com.catering.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import com.catering.backend.service.UserService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;
    private UserService userService; // ✅ add this

    @PostMapping
    public CustomerOrder placeOrder(@AuthenticationPrincipal User user, @RequestBody List<OrderItem> items) {
        System.out.println("📥 Received order items: " + items.size());

        return orderService.placeOrder(user, items);
    }

    @GetMapping
    public List<CustomerOrder> getOrders(@AuthenticationPrincipal User user) {
        return orderService.getUserOrders(user);
    }

}