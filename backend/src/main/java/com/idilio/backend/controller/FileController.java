package com.idilio.backend.controller;

import com.idilio.backend.fileupload.FileResponse;
import com.idilio.backend.fileupload.FileStorageService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.util.*;

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

    // store multiple files
    public ResponseEntity<List<FileResponse>> uploadMultipleFile(MultipartFile[] files, String imgCategory, String uploadDir){
        List<FileResponse> list = new ArrayList<>();
        //final int[] number = {1};
        Arrays.asList(files).stream().forEach(file->{
            String imgName= StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename()));
            String fileName = fileStorageService.storeFile(file,imgName,uploadDir);
            String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path("/api/v1/upload/" + imgCategory + "/")
                    .path(fileName)
                    .toUriString();

            FileResponse fileResponse = new FileResponse(fileName, fileDownloadUri, file.getContentType(), file.getSize());
            list.add(fileResponse);
            //number[0]++;
        });
        return new ResponseEntity<List<FileResponse>>(list, HttpStatus.OK);
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

    @PostMapping("/uploadresourceorderdrawing/{resourceOrderId}")
    public ResponseEntity<FileResponse> ResourceOrderDrawingUpload(@RequestParam("file") MultipartFile file, @PathVariable int resourceOrderId){
        String imgName = Integer.toString(resourceOrderId) + ".jpg";
        String uploadDir = "resourceOrderDrawing";
        return uploadFile(file, imgName,"resourceOrderDrawing", uploadDir);
    }

    @GetMapping("/resourceorderdrawing/{resourceOrderId}")
    public ResponseEntity<Resource> downloadResourceOrderDrawing(@PathVariable int resourceOrderId, HttpServletRequest request){
        String fileName = Integer.toString(resourceOrderId)+".jpg";
        String fileDir = "resourceOrderDrawing";
        return LoadFile(fileName, fileDir, request);
    }

    @PostMapping("/uploadresourceorderwork/{resourceOrderId}")
    public ResponseEntity<FileResponse> ResourceOrderWorkUpload(@RequestParam("file") MultipartFile file, @PathVariable int resourceOrderId){
        String imgName = Integer.toString(resourceOrderId) + ".jpg";
        String uploadDir = "resourceOrderWork";
        return uploadFile(file, imgName,"resourceOrderWork", uploadDir);
    }

    @GetMapping("/resourceorderwork/{resourceOrderId}")
    public ResponseEntity<Resource> downloadResourceOrderWork(@PathVariable int resourceOrderId, HttpServletRequest request){
        String fileName = Integer.toString(resourceOrderId)+".jpg";
        String fileDir = "resourceOrderWork";
        return LoadFile(fileName, fileDir, request);
    }

    @PostMapping("/uploadneworderdrawing/{newOrderId}")
    public ResponseEntity<FileResponse> NewOrderDrawingUpload(@RequestParam("file") MultipartFile file, @PathVariable int newOrderId){
        String imgName = Integer.toString(newOrderId) + ".jpg";
        String uploadDir = "newOrderDrawing";
        return uploadFile(file, imgName,"newOrderDrawing", uploadDir);
    }

    @GetMapping("/neworderdrawing/{newOrderId}")
    public ResponseEntity<Resource> downloadNewOrderDrawing(@PathVariable int newOrderId, HttpServletRequest request){
        String fileName = Integer.toString(newOrderId)+".jpg";
        String fileDir = "newOrderDrawing";
        return LoadFile(fileName, fileDir, request);
    }

    @PostMapping("/uploadneworderwork/{newOrderId}")
    public ResponseEntity<FileResponse> NewOrderWorkUpload(@RequestParam("file") MultipartFile file, @PathVariable int newOrderId){
        String imgName = Integer.toString(newOrderId) + ".jpg";
        String uploadDir = "newOrderWork";
        return uploadFile(file, imgName,"newOrderWork", uploadDir);
    }

    @GetMapping("/neworderwork/{newOrderId}")
    public ResponseEntity<Resource> downloadNewOrderWork(@PathVariable int newOrderId, HttpServletRequest request){
        String fileName = Integer.toString(newOrderId)+".jpg";
        String fileDir = "newOrderWork";
        return LoadFile(fileName, fileDir, request);
    }

    //multiple file

    //upload multiple files new
    @PostMapping("/uploadneworderfiles/{newOrderId}")
    public ResponseEntity<List<FileResponse>> uploadNewOrderFiles(@RequestParam("file") MultipartFile[] files,@PathVariable int newOrderId){
        String uploadDir="NewOrderAttachments/"+Integer.toString(newOrderId);
        return uploadMultipleFile(files,uploadDir,uploadDir);
    }

    //get multiple file new
    @GetMapping("/neworderfiles/{newOrderId}")
    public List<String> getNewOrderFiles(@PathVariable int newOrderId, HttpServletRequest request){
        String fileDir="NewOrderAttachments/"+Integer.toString(newOrderId);
        return fileStorageService.getMultipleFiles(fileDir);
    }

    //upload multiple files resource
    @PostMapping("/uploadresourceorderfiles/{resourceOrderId}")
    public ResponseEntity<List<FileResponse>> uploadResourceOrderFiles(@RequestParam("file") MultipartFile[] files,@PathVariable int resourceOrderId){
        String uploadDir="ResourceOrderAttachments/"+Integer.toString(resourceOrderId);
        return uploadMultipleFile(files,uploadDir,uploadDir);
    }

    //get multiple file resource
    @GetMapping("/resourceorderfiles/{resourceOrderId}")
    public List<String> getResourceOrderFiles(@PathVariable int resourceOrderId, HttpServletRequest request){
        String fileDir="ResourceOrderAttachments/"+Integer.toString(resourceOrderId);
        return fileStorageService.getMultipleFiles(fileDir);
    }

    @GetMapping("/neworderfile/{newOrderId}/{fileName}")
    public ResponseEntity<Resource> getNewOrderFile(@PathVariable int newOrderId,@PathVariable String fileName, HttpServletRequest request){
        String fileDir="NewOrderAttachments/"+Integer.toString(newOrderId);
        return LoadFile(fileName,fileDir,request);
    }

    @GetMapping("/resourceorderfile/{resourceOrderId}/{fileName}")
    public ResponseEntity<Resource> getResourceOrderFile(@PathVariable int resourceOrderId,@PathVariable String fileName, HttpServletRequest request){
        String fileDir="ResourceOrderAttachments/"+Integer.toString(resourceOrderId);
        return LoadFile(fileName,fileDir,request);
    }

}
