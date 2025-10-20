package com.catering.backend.controller;

import com.catering.backend.model.MenuItem;
import com.catering.backend.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/menu")
public class MenuController {
    @Autowired
    private MenuService menuItemService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)  // ✅ FIXED: Correct Content-Type
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> createMenuItem(
            @RequestPart("name") String name,
            @RequestPart("description") String description,
            @RequestPart("price") String priceStr,  // String first to avoid binding errors
            @RequestPart(value = "image", required = false) MultipartFile image) {
        try {
            double price = Double.parseDouble(priceStr);

            MenuItem menuItem = new MenuItem();
            menuItem.setName(name);
            menuItem.setDescription(description);
            menuItem.setPrice(price);

            if (image != null && !image.isEmpty()) {
                // ✅ store raw bytes directly
                menuItem.setImage(image.getBytes());
            }


            MenuItem savedItem = menuItemService.createMenuItem(menuItem);
            System.out.println("✅ MenuItem CREATED: " + savedItem.getName());
            return ResponseEntity.ok(savedItem);
        } catch (Exception e) {
            System.err.println("❌ MenuItem ERROR: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<MenuItem>> getAllMenuItems() {
        return ResponseEntity.ok(menuItemService.getAllMenuItems());
    }

    // ✅ separate method, not nested inside the one above
    @GetMapping("/{id}/image")
    public ResponseEntity<byte[]> getMenuItemImage(@PathVariable Long id) {
        MenuItem menuItem = menuItemService.getMenuItemById(id);
        if (menuItem.getImage() == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_JPEG) // or IMAGE_PNG depending on your uploads
                .body(menuItem.getImage());
    }

}