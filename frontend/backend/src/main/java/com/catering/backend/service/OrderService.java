//package com.catering.backend.service;
//
//import com.catering.backend.DTO.OrderConfirmationRequest;
//import com.catering.backend.model.CustomerOrder;
//import com.catering.backend.model.OrderItem;
//import com.catering.backend.model.User;
//import com.catering.backend.repository.CustomerOrderRepository;
//import com.catering.backend.repository.UserRepository;
//import com.catering.backend.repository.MenuItemRepository; // ✅ import added
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class OrderService {
//
//    @Autowired
//    private CustomerOrderRepository orderRepository;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private MenuItemRepository menuItemRepository; // ✅ injected
//
//    public boolean confirmOrder(Long orderId, OrderConfirmationRequest request)
//
//
//    public CustomerOrder placeOrder(List<OrderItem> items) {
//        // ✅ Extract authenticated user (email is the principal)
//        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//        User user = userRepository.findByEmail(auth.getName())
//                .orElseThrow(() -> new RuntimeException("User not found: " + auth.getName()));
//
//        CustomerOrder order = new CustomerOrder();
//        order.setUser(user);
//
//        items.forEach(item -> {
//            item.setOrder(order);
//            item.setMenuItem(
//                    menuItemRepository.findById(item.getMenuItem().getId())
//                            .orElseThrow(() -> new RuntimeException("MenuItem not found: " + item.getMenuItem().getId()))
//            );
//        });
//        order.setItems(items);
//
//        // ✅ Now calculate total with real prices
//        double total = items.stream()
//                .mapToDouble(item -> item.getMenuItem().getPrice() * item.getQuantity())
//                .sum();
//        order.setTotal(total);
//
//        return orderRepository.save(order);
//    }
//
//    public List<CustomerOrder> getUserOrders() {
//        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//        User user = userRepository.findByEmail(auth.getName())
//                .orElseThrow(() -> new RuntimeException("User not found: " + auth.getName()));
//        return orderRepository.findByUser(user);
//    }
//}


package com.catering.backend.service;

import com.catering.backend.DTO.OrderConfirmationRequest;
import com.catering.backend.model.CustomerOrder;
import com.catering.backend.model.OrderItem;
import com.catering.backend.model.User;
import com.catering.backend.repository.CustomerOrderRepository;
import com.catering.backend.repository.UserRepository;
import com.catering.backend.repository.MenuItemRepository; // ✅ import added
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private CustomerOrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MenuItemRepository menuItemRepository; // ✅ injected

    @Autowired
    private EmailService emailService; // ✅ added

    public boolean confirmOrder(Long orderId, OrderConfirmationRequest request) {
        CustomerOrder order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found with id: " + orderId));

        // Update order status
        order.setStatus("CONFIRMED");

        // Optionally store user details from request (if your CustomerOrder has fields for them)
        System.out.println("Confirming order for: " + request.getName() + ", " + request.getEmail());

        orderRepository.save(order);

        // ✅ Call EmailService to send confirmation email with receipt
        emailService.sendOrderConfirmationEmail(order, request);

        return true;
    }

    public CustomerOrder placeOrder(List<OrderItem> items) {
        // ✅ Extract authenticated user (email is the principal)
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(auth.getName())
                .orElseThrow(() -> new RuntimeException("User not found: " + auth.getName()));

        CustomerOrder order = new CustomerOrder();
        order.setUser(user);

        items.forEach(item -> {
            item.setOrder(order);
            item.setMenuItem(
                    menuItemRepository.findById(item.getMenuItem().getId())
                            .orElseThrow(() -> new RuntimeException("MenuItem not found: " + item.getMenuItem().getId()))
            );
        });
        order.setItems(items);

        // ✅ Now calculate total with real prices
        double total = items.stream()
                .mapToDouble(item -> item.getMenuItem().getPrice() * item.getQuantity())
                .sum();
        order.setTotal(total);

        return orderRepository.save(order);
    }

    public List<CustomerOrder> getUserOrders() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(auth.getName())
                .orElseThrow(() -> new RuntimeException("User not found: " + auth.getName()));
        return orderRepository.findByUser(user);
    }
}
