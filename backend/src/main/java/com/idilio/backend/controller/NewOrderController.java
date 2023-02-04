package com.idilio.backend.controller;

import com.idilio.backend.dto.NewOrderDTO;
import com.idilio.backend.repository.NewOrderRepo;
import com.idilio.backend.service.NewOrderService;
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
@RequestMapping("api/v1/neworder")
public class NewOrderController {
    @Autowired
    private NewOrderService newOrderService;

    @Autowired
    private NewOrderRepo newOrderRepo;

    @GetMapping("/getallneworders")
    public ResponseEntity<?> getAllNewOrders(){
        Map<String, Object> map = new LinkedHashMap<>();
        List<NewOrderDTO> newOrderList = newOrderService.getAllNewOrders();
        if(!newOrderList.isEmpty()){
            map.put("status",1);
            map.put("data",newOrderList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","New Order List Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

}
