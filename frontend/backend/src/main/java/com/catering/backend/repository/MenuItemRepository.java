package com.catering.backend.repository;

import com.catering.backend.model.MenuItem;
import com.catering.backend.model.EventType;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {

    // ✅ Correct method for Set<EventType>
    List<MenuItem> findByEventTypesContaining(EventType eventType);

}
