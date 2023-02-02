package com.idilio.backend.controller;

import com.idilio.backend.dto.ResourceOrderDTO;
import com.idilio.backend.dto.ResourcesDTO;
import com.idilio.backend.repository.ResourceOrderRepo;
import com.idilio.backend.service.ResourceOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping("/getallresourceorders")
    public ResponseEntity<?> getAllResourceOrders(){
        Map<String, Object> map = new LinkedHashMap<>();
        List<ResourceOrderDTO> resourcesOrderList = resourceOrderService.getAllResourceOrders();
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
}
