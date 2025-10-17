package com.catering.backend.repository;

import com.catering.backend.model.CustomerOrder;
import com.catering.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CustomerOrderRepository extends JpaRepository<CustomerOrder, Long> {
    List<CustomerOrder> findByUser(User user);
}