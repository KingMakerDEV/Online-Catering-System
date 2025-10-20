package com.catering.backend.controller;

import com.catering.backend.model.MenuItem;
import com.catering.backend.service.MenuService;
import com.catering.backend.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.HttpStatus;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
public class MenuController {

    private final ImageService imageService;
    private final MenuService menuItemService;

    @Autowired
    public MenuController(ImageService imageService, MenuService menuItemService) {
        this.imageService = imageService;
        this.menuItemService = menuItemService;
    }

    // Standalone image upload (optional)
    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
        try {
            String url = imageService.uploadImage(file);
            return ResponseEntity.ok(url);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Upload failed: " + e.getMessage());
        }
    }

    // Create a new menu item with image upload
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> createMenuItem(
            @RequestPart("name") String name,
            @RequestPart("description") String description,
            @RequestPart("price") String priceStr,
            @RequestPart(value = "image", required = false) MultipartFile image) {
        try {
            double price = Double.parseDouble(priceStr);

            MenuItem menuItem = new MenuItem();
            menuItem.setName(name);
            menuItem.setDescription(description);
            menuItem.setPrice(price);

            if (image != null && !image.isEmpty()) {
                // Upload to Cloudinary and save URL
                String imageUrl = imageService.uploadImage(image);
                menuItem.setImageUrl(imageUrl);
            }

            MenuItem savedItem = menuItemService.createMenuItem(menuItem);
            return ResponseEntity.ok(savedItem);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<MenuItem>> getAllMenuItems() {
        return ResponseEntity.ok(menuItemService.getAllMenuItems());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MenuItem> getMenuItemById(@PathVariable Long id) {
        MenuItem menuItem = menuItemService.getMenuItemById(id);
        if (menuItem == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(menuItem);
    }
}
