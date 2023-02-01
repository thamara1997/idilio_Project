package com.idilio.backend.controller;

import com.idilio.backend.dto.DesignerDTO;
import com.idilio.backend.dto.ResourcesDTO;
import com.idilio.backend.repository.ResourcesRepo;
import com.idilio.backend.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("api/v1/resources")
public class ResourceController {
    @Autowired
    private ResourceService resourceService;
    @Autowired
    private ResourcesRepo resourcesRepo;

    @GetMapping("/getallresources")
    public ResponseEntity<?> getAllResources(){
        Map<String, Object> map = new LinkedHashMap<>();
        List<ResourcesDTO> resourcesList = resourceService.getAllResources();
        if(!resourcesList.isEmpty()){
            map.put("status",1);
            map.put("data",resourcesList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Resources List Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addresource")
    public ResponseEntity<?> addResource(@RequestBody ResourcesDTO resourcesDTO){
        Map<String, Object> map = new LinkedHashMap<>();
        ResourcesDTO resourcesDTO1 = resourceService.addResource(resourcesDTO);
        if(resourcesDTO1 != null){
            map.put("status",1);
            map.put("data",resourcesDTO1);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Resource Not Added");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updateresource")
    public ResponseEntity<?> updateResource(@RequestBody ResourcesDTO resourcesDTO){
        Map<String, Object> map = new LinkedHashMap<>();
        ResourcesDTO resourcesDTO1 = resourceService.updateResource(resourcesDTO);
        if(resourcesDTO1 != null){
            map.put("status",1);
            map.put("data",resourcesDTO1);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Resource Not Updated");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getresourcebyid/{resourceId}")
    public ResponseEntity<?> getDesignerById(@PathVariable int resourceId){
        Map<String, Object> map = new LinkedHashMap<>();
        ResourcesDTO resourcesDTO = resourceService.getResourceById(resourceId);
        if(resourcesDTO != null){
            map.put("status",1);
            map.put("data",resourcesDTO);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Designer id Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteresource/{resourceId}")
    public ResponseEntity<?> deleteResource(@PathVariable int resourceId){
        Map<String, Object> map = new LinkedHashMap<>();
        boolean deleted = resourceService.deleteResource(resourceId);
        if(deleted){
            map.put("status",1);
            map.put("data",deleted);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Resource Not Deleted");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }
}
