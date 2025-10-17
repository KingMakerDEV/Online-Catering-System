package com.catering.backend.service;

import com.catering.backend.model.CustomerOrder;
import com.catering.backend.model.OrderItem;
import com.catering.backend.model.User;
import com.catering.backend.repository.CustomerOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private CustomerOrderRepository orderRepository;

    public CustomerOrder placeOrder(User user, List<OrderItem> items) {
        CustomerOrder order = new CustomerOrder();
        order.setUser(user);
        order.setItems(items);
        items.forEach(item -> item.setOrder(order));
        order.setTotal(items.stream().mapToDouble(item -> item.getMenuItem().getPrice() * item.getQuantity()).sum());
        return orderRepository.save(order);
    }

    public List<CustomerOrder> getUserOrders(User user) {
        return orderRepository.findByUser(user);
    }
}