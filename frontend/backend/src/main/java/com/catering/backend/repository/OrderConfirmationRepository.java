package com.catering.backend.repository;

import com.catering.backend.model.OrderConfirmation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderConfirmationRepository extends JpaRepository<OrderConfirmation, Long> {
}
