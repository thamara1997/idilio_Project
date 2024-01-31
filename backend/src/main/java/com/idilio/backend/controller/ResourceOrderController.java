package com.idilio.backend.controller;

import com.idilio.backend.dto.*;
import com.idilio.backend.repository.ResourceOrderRepo;
import com.idilio.backend.service.ResourceOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("api/v1/resourceorder")
public class ResourceOrderController {
    @Autowired
    private ResourceOrderService resourceOrderService;

    @Autowired
    private ResourceOrderRepo resourceOrderRepo;
    private Object resourceOrderFullDTO;

    @GetMapping("/get/getallresourceorders")
    public ResponseEntity<?> getAllResourceOrders(){
        Map<String, Object> map = new LinkedHashMap<>();
        List<ResourceOrderFullDTO> resourcesOrderList = resourceOrderService.getAllResourceOrders();
        if(!resourcesOrderList.isEmpty()){
            map.put("status",1);
            map.put("data",resourcesOrderList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Resource Order List Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addresourceorder")
    public ResponseEntity<?> addResourceOrder(@RequestBody ResourceOrderDTO resourceOrderDTO){
        Map<String,Object> map = new LinkedHashMap<>();
        ResourceOrderDTO resourceOrderDTO1 = resourceOrderService.addResourceOrder(resourceOrderDTO);
        if(resourceOrderDTO1 != null){
            map.put("status",1);
            map.put("data",resourceOrderDTO1);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Resource Order Not Added");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updateresourceorder")
    public ResponseEntity<?> updateNewOrder(@RequestBody ResourceOrderDTO resourceOrderDTO){
        Map<String, Object> map = new LinkedHashMap<>();
        ResourceOrderFullDTO resourceOrderDTO1 = resourceOrderService.updateResourceOrder(resourceOrderDTO);
        if(resourceOrderDTO1 != null){
            map.put("status",1);
            map.put("data",resourceOrderDTO1);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Resource Order Not Updated");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/getresourceorderbyid/{resourceOrderId}")
    public ResponseEntity<?> getResourceOrderById(@PathVariable int resourceOrderId){
        Map<String, Object> map = new LinkedHashMap<>();
        ResourceOrderFullDTO resourceOrderDTO = resourceOrderService.getResourceOrderById(resourceOrderId);
        if(resourceOrderDTO != null){
            map.put("status",1);
            map.put("data",resourceOrderDTO);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Resource Order id Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/getresourceorderbydesignerid/{designerId}")
    public ResponseEntity<?> getResourceOrderByDesignerId(@PathVariable Integer designerId)throws NullPointerException{
        Map<String, Object> map = new LinkedHashMap<>();
        List<ResourceOrderFullDTO> resourceOrderList = resourceOrderService.getResourceOrderByDesignerId(designerId);
        if(resourceOrderList != null){
            map.put("status",1);
            map.put("data",resourceOrderList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","New Order List Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/getresourcereviewbyresourceid/{resourceId}")
    public ResponseEntity<?> getResourceReviewByResourceId(@PathVariable Integer resourceId)throws NullPointerException{
        Map<String, Object> map = new LinkedHashMap<>();
        List<ResourceOrderFullDTO> resourceOrderList = resourceOrderService.getResourceReviewByResourceId(resourceId);
        if(resourceOrderList != null){
            map.put("status",1);
            map.put("data",resourceOrderList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Reviews List Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteresourceorder/{resourceOrderId}")
    public ResponseEntity<?> deleteResourceOrder(@PathVariable int resourceOrderId){
        Map<String, Object> map = new LinkedHashMap<>();
        boolean deleted = resourceOrderService.deleteResourceOrder(resourceOrderId);
        if(deleted){
            map.put("status",1);
            map.put("data",deleted);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Resource Order Not Deleted");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }
}
