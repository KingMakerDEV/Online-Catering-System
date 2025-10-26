//
//package com.catering.backend.service;
//
//import com.catering.backend.DTO.OrderConfirmationRequest;
//import com.catering.backend.model.CustomerOrder;
//import com.catering.backend.model.OrderItem;
//import com.catering.backend.model.User;
//import com.catering.backend.model.OrderConfirmation; // ✅ added
//import com.catering.backend.repository.CustomerOrderRepository;
//import com.catering.backend.repository.UserRepository;
//import com.catering.backend.repository.MenuItemRepository; // ✅ already present
//import com.catering.backend.repository.OrderConfirmationRepository; // ✅ added
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional; // ✅ added
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
//    private MenuItemRepository menuItemRepository;
//
//    @Autowired
//    private EmailService emailService;
//
//    @Autowired
//    private OrderConfirmationRepository orderConfirmationRepository; // ✅ injected
//
//    @Transactional
//    public boolean confirmOrder(Long orderId, OrderConfirmationRequest request) {
//        CustomerOrder order = orderRepository.findById(orderId)
//                .orElseThrow(() -> new RuntimeException("Order not found with id: " + orderId));
//
//        // Update order status
//        order.setStatus("CONFIRMED");
//        orderRepository.save(order);
//
//        // ✅ Build and persist OrderConfirmation entity
//        OrderConfirmation confirmation = new OrderConfirmation();
//        confirmation.setOrder(order);
//        confirmation.setCustomerName(request.getName());
//        confirmation.setEmail(request.getEmail());
//        confirmation.setAddress(request.getAddress());
//        confirmation.setPhone(request.getPhone());
//        confirmation.setDate(request.getDate());
//
//        orderConfirmationRepository.save(confirmation);
//
//        // ✅ Send confirmation email
//        emailService.sendOrderConfirmationEmail(order, request);
//
//        return true;
//    }
//
//    public CustomerOrder placeOrder(List<OrderItem> items) {
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
import com.catering.backend.model.OrderConfirmation; // ✅ added
import com.catering.backend.repository.CustomerOrderRepository;
import com.catering.backend.repository.UserRepository;
import com.catering.backend.repository.MenuItemRepository; // ✅ already present
import com.catering.backend.repository.OrderConfirmationRepository; // ✅ added
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional; // ✅ added

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private CustomerOrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MenuItemRepository menuItemRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private OrderConfirmationRepository orderConfirmationRepository; // ✅ injected

    @Transactional
    public boolean confirmOrder(Long orderId, OrderConfirmationRequest request) {
        CustomerOrder order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found with id: " + orderId));

        // Update order status
        order.setStatus("CONFIRMED");
        orderRepository.save(order);

        // ✅ Build and persist OrderConfirmation entity
        OrderConfirmation confirmation = new OrderConfirmation();
        confirmation.setOrder(order);
        confirmation.setCustomerName(request.getName());
        confirmation.setEmail(request.getEmail());
        confirmation.setAddress(request.getAddress());
        confirmation.setPhone(request.getPhone());
        confirmation.setDate(request.getDate());

        orderConfirmationRepository.save(confirmation);

        // ✅ Send confirmation email (now includes date)
        emailService.sendOrderConfirmationEmail(order, request);

        return true;
    }

    public CustomerOrder placeOrder(List<OrderItem> items) {
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
