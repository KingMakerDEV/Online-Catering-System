package com.catering.backend.repository;

import com.catering.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.catering.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);


}