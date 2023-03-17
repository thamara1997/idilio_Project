package com.idilio.backend.fileupload;
import com.idilio.backend.fileupload.exception.FileStorageException;
import com.idilio.backend.fileupload.exception.MyFileNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class FileStorageService {
//    @Autowired
    private final Path fileStorageLocation;

    @Autowired
    public FileStorageService(FileStorageProperties fileStorageProperties) {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir()).toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);

        } catch (Exception ex) {
            throw new FileStorageException("Could not create the directory to upload");
        }
    }

    //	function to store the file
    public String storeFile(MultipartFile file,String imgName,String uploadDir) {
        try {
            Path uplaodPath= Paths.get(this.fileStorageLocation.toString()+"/"+uploadDir);
            if(!Files.exists(uplaodPath)){
                Files.createDirectories(uplaodPath);
            }

            Path targetLocation = uplaodPath.resolve(imgName);
            Files.copy(file.getInputStream(), targetLocation,StandardCopyOption.REPLACE_EXISTING);

            return imgName;
        }catch(IOException ex) {
            throw new FileStorageException("Could not store file"+imgName + ". Please try again!",ex);
        }
    }

    //	function to load the file
    public Resource loadFileAsResource(String fileName,String fileDir) {
        try {
            Path filePath=Paths.get(this.fileStorageLocation.toString()+"/"+fileDir).resolve(fileName).normalize();

            Resource resource = new UrlResource(filePath.toUri());

            if(resource.exists()) {
                return resource;
            }
            if(!resource.exists()){
                Path noPicFilePath=Paths.get(this.fileStorageLocation.toString()+"/"+fileDir).resolve("0.jpg").normalize();
                return new UrlResource(noPicFilePath.toUri());
            }
            else {
                throw new MyFileNotFoundException("File not found " + fileName);
            }
        }catch(MalformedURLException ex) {
            throw new MyFileNotFoundException("File not found " + fileName);
        }
    }
}
