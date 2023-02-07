package com.idilio.backend.controller;

import com.idilio.backend.dto.DesignerDTO;
import com.idilio.backend.dto.PackageDTO;
import com.idilio.backend.service.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("api/v1/package")
public class PackageController {
    @Autowired
    private PackageService packageService;

    @GetMapping("/getallpackages")
    public ResponseEntity<?> getAllPackages(){
        Map<String, Object> map = new LinkedHashMap<>();
        List<PackageDTO> packageList = packageService.getAllPackages();
        if(!packageList.isEmpty()){
            map.put("status",1);
            map.put("data",packageList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Package List Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addpackage")
    public ResponseEntity<?> addPackage(@RequestBody PackageDTO packageDTO){
        Map<String, Object> map = new LinkedHashMap<>();
        PackageDTO packageDTO1 = packageService.addPackage(packageDTO);
        if(packageDTO1 != null){
            map.put("status",1);
            map.put("data",packageDTO1);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Package Not Added");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updatepackage")
    public ResponseEntity<?> updatePackage(@RequestBody PackageDTO packageDTO){
        Map<String, Object> map = new LinkedHashMap<>();
        PackageDTO packageDTO1 = packageService.updatePackage(packageDTO);
        if(packageDTO1 != null){
            map.put("status",1);
            map.put("data",packageDTO1);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Package Not Updated");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getpackagebyid/{packageId}")
    public ResponseEntity<?> getPackageById(@PathVariable int packageId){
        Map<String, Object> map = new LinkedHashMap<>();
        PackageDTO packageDTO = packageService.getPackageById(packageId);
        if(packageDTO != null){
            map.put("status",1);
            map.put("data",packageDTO);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Package id Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }
}
