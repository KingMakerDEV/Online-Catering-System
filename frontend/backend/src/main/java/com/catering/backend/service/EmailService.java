//package com.catering.backend.service;
//
//import com.catering.backend.DTO.OrderConfirmationRequest;
//import com.catering.backend.model.CustomerOrder;
//import com.catering.backend.model.OrderItem;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.stereotype.Service;
//
//@Service
//public class EmailService {
//
//    @Autowired
//    private JavaMailSender mailSender;
//
//    public void sendOrderConfirmationEmail(CustomerOrder order, OrderConfirmationRequest request) {
//        String to = request.getEmail();
//        String subject = "Order Confirmation - Order #" + order.getId();
//
//        // Build a simple text receipt
//        StringBuilder body = new StringBuilder();
//        body.append("Hello ").append(request.getName()).append(",\n\n");
//        body.append("Thank you for your order! Your order has been confirmed.\n\n");
//        body.append("Order Details:\n");
//        order.getItems().forEach(item -> {
//            body.append("- ")
//                    .append(item.getMenuItem().getName())
//                    .append(" × ")
//                    .append(item.getQuantity())
//                    .append(" = ₹")
//                    .append(item.getMenuItem().getPrice() * item.getQuantity())
//                    .append("\n");
//        });
//        body.append("\nTotal: ₹").append(order.getTotal()).append("\n\n");
//        body.append("Delivery Address: ").append(request.getAddress()).append("\n");
//        body.append("Phone: ").append(request.getPhone()).append("\n\n");
//        body.append("We’ll notify you once your order is on the way!\n\n");
//        body.append("Best regards,\nCatering Team");
//
//        // Create and send the email
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setTo(to);
//        message.setSubject(subject);
//        message.setText(body.toString());
//
//        // ✅ Add a valid From address (must be verified in SendGrid)
//        message.setFrom("abhayzombade1@gmail.com");
//
//        mailSender.send(message);
//    }
//}


package com.catering.backend.service;

import com.catering.backend.DTO.OrderConfirmationRequest;
import com.catering.backend.model.CustomerOrder;
import com.catering.backend.model.OrderItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.catering.backend.DTO.FeedbackRequest; // ✅ added import

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendOrderConfirmationEmail(CustomerOrder order, OrderConfirmationRequest request) {
        String to = request.getEmail();
        String subject = "Order Confirmation - Order #" + order.getId();

        // Build a simple text receipt
        StringBuilder body = new StringBuilder();
        body.append("Hello ").append(request.getName()).append(",\n\n");
        body.append("Thank you for your order! Your order has been confirmed.\n\n");
        body.append("Order Details:\n");
        order.getItems().forEach(item -> {
            body.append("- ")
                    .append(item.getMenuItem().getName())
                    .append(" × ")
                    .append(item.getQuantity())
                    .append(" = ₹")
                    .append(item.getMenuItem().getPrice() * item.getQuantity())
                    .append("\n");
        });
        body.append("\nTotal: ₹").append(order.getTotal()).append("\n\n");
        body.append("Delivery Address: ").append(request.getAddress()).append("\n");
        body.append("Phone: ").append(request.getPhone()).append("\n");
        body.append("Date: ").append(request.getDate()).append("\n\n"); // ✅ added date
        body.append("We’ll notify you once your order is on the way!\n\n");
        body.append("Best regards,\nCatering Team");

        // Create and send the email
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body.toString());

        // ✅ Add a valid From address (must be verified in SendGrid)
        message.setFrom("abhayzombade1@gmail.com");

        mailSender.send(message);
    }
    public void sendFeedbackEmail(FeedbackRequest request) {
        String to = "wnikhil146@gmail.com"; // ✅ fixed recipient
        String subject = "New Feedback from " + request.getName();

        String body = "You have received new feedback:\n\n"
                + "Name: " + request.getName() + "\n"
                + "Email: " + request.getEmail() + "\n\n"
                + "Feedback:\n" + request.getFeedback();

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);
        message.setFrom("abhayzombade1@gmail.com"); // must be a verified sender

        mailSender.send(message);
    }

}

