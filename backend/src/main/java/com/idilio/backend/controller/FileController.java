package com.idilio.backend.controller;

import com.idilio.backend.fileupload.FileResponse;
import com.idilio.backend.fileupload.FileStorageService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/v1/upload")
public class FileController {

    @Autowired
    private FileStorageService fileStorageService;


    // store function
    public ResponseEntity<FileResponse> uploadFile(MultipartFile file, String imgName, String imgCategory, String uploadDir) {
        String fileName = fileStorageService.storeFile(file, imgName, uploadDir);
        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/v1/upload/" + imgCategory + "/")
                .path(fileName)
                .toUriString();

        FileResponse fileResponse = new FileResponse(fileName, fileDownloadUri, file.getContentType(), file.getSize());
        return new ResponseEntity<FileResponse>(fileResponse, HttpStatus.OK);
    }

    // load function
    public ResponseEntity<Resource> LoadFile(String fileName, String fileDir, HttpServletRequest request) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        Resource resource = fileStorageService.loadFileAsResource(fileName, fileDir);


        String contentType = null;

        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            System.out.println("Could not determine fileType");
        }

        if (contentType == null) {
            contentType = "application/octet-stream";
        }

        if (resource == null) {
            System.out.print("null");
            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .body(null);
        }
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .body(resource);
    }


    // mappings
    @PostMapping("/uploadprofilepic/{userId}")
    public ResponseEntity<FileResponse> ProfilePicture(@RequestParam("file") MultipartFile file, @PathVariable int userId) {
        String imgName = Integer.toString(userId) + ".jpg";
        String uploadDir = "profilePic";
        return uploadFile(file, imgName, "profilePic", uploadDir);
    }

    @GetMapping("/profilePic/{userId}")
    public ResponseEntity<Resource> downloadFile(@PathVariable int userId, HttpServletRequest request) {
        String fileName = Integer.toString(userId) + ".jpg";
        String fileDir = "profilePic";
        return LoadFile(fileName, fileDir, request);
    }

    @PostMapping("/uploadresourceart/{resourceId}")
    public ResponseEntity<FileResponse> ResourceArt(@RequestParam("file") MultipartFile file, @PathVariable int resourceId){
        String imgName = Integer.toString(resourceId) + ".jpg";
        String uploadDir = "resourceArt";
        return uploadFile(file, imgName,"resourceArt", uploadDir);
    }

    @GetMapping("/resourceArt/{resourceId}")
    public ResponseEntity<Resource> downloadResourceArt(@PathVariable int resourceId, HttpServletRequest request){
        String fileName = Integer.toString(resourceId)+".jpg";
        String fileDir = "resourceArt";
        return LoadFile(fileName, fileDir, request);
    }

}
