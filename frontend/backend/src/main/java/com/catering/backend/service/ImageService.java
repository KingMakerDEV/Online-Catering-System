package com.catering.backend.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
public class ImageService {

    private final Cloudinary cloudinary;

    public ImageService(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }

    /**
     * Uploads an image to Cloudinary and returns the secure URL.
     *
     * @param file MultipartFile uploaded from frontend
     * @return Publicly accessible Cloudinary URL
     * @throws IOException if upload fails
     */
    public String uploadImage(MultipartFile file) throws IOException {
        Map uploadResult = cloudinary.uploader().upload(
                file.getBytes(),
                ObjectUtils.asMap(
                        "folder", "menu_items",   // optional: organize into a folder
                        "resource_type", "auto"   // auto-detect image type
                )
        );

        return uploadResult.get("secure_url").toString();
    }
}
