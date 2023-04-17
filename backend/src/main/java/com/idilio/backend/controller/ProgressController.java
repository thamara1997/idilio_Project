package com.idilio.backend.controller;

import com.idilio.backend.dto.PackageDTO;
import com.idilio.backend.dto.ProgressDTO;
import com.idilio.backend.service.ProgressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("api/v1/progress")
public class ProgressController {

    @Autowired
    private ProgressService progressService;

    @GetMapping("/get/getallprogress")
    public ResponseEntity<?> getAllProgress(){
        Map<String, Object> map = new LinkedHashMap<>();
        List<ProgressDTO> progressList = progressService.getAllProgress();
        if(!progressList.isEmpty()){
            map.put("status",1);
            map.put("data",progressList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Progress List Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addprogress")
    public ResponseEntity<?> addProgress(@RequestBody ProgressDTO progressDTO){
        Map<String, Object> map = new LinkedHashMap<>();
        ProgressDTO packageDTO1 = progressService.addProgress(progressDTO);
        if(packageDTO1 != null){
            map.put("status",1);
            map.put("data",packageDTO1);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Progress Not Added");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updateprogress")
    public ResponseEntity<?> updateProgress(@RequestBody ProgressDTO progressDTO){
        Map<String, Object> map = new LinkedHashMap<>();
        ProgressDTO progressDTO1 = progressService.updateProgress(progressDTO);
        if(progressDTO1 != null){
            map.put("status",1);
            map.put("data",progressDTO1);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Progress Not Updated");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/getprogressbyid/{progressId}")
    public ResponseEntity<?> getProgressById(@PathVariable int progressId){
        Map<String, Object> map = new LinkedHashMap<>();
        ProgressDTO progressDTO = progressService.getProgressById(progressId);
        if(progressDTO != null){
            map.put("status",1);
            map.put("data",progressDTO);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Progress id Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

}
