package com.catering.backend.controller;

import com.catering.backend.DTO.FeedbackRequest;
import com.catering.backend.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/feedback")
@CrossOrigin(origins = "http://localhost:5173") // ✅ allow frontend
public class FeedbackController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> submitFeedback(@RequestBody FeedbackRequest request) {
        emailService.sendFeedbackEmail(request);
        return ResponseEntity.ok("Feedback sent successfully");
    }
}
