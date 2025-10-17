package com.catering.backend.controller;

import com.catering.backend.model.CustomerOrder;
import com.catering.backend.model.OrderItem;
import com.catering.backend.model.User;
import com.catering.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping
    public CustomerOrder placeOrder(@AuthenticationPrincipal User user, @RequestBody List<OrderItem> items) {
        return orderService.placeOrder(user, items);
    }

    @GetMapping
    public List<CustomerOrder> getOrders(@AuthenticationPrincipal User user) {
        return orderService.getUserOrders(user);
    }
}