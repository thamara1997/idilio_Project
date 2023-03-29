package com.idilio.backend.controller;

import com.idilio.backend.dto.NewOrderDTO;
import com.idilio.backend.dto.NewOrderFullDTO;
import com.idilio.backend.dto.ResourcesDTO;
import com.idilio.backend.repository.NewOrderRepo;
import com.idilio.backend.service.NewOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        List<NewOrderFullDTO> newOrderList = newOrderService.getAllNewOrders();
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

    @PostMapping("/addneworder")
    public ResponseEntity<?> addNewOrder(@RequestBody NewOrderDTO newOrderDTO){
        Map<String,Object> map = new LinkedHashMap<>();
        NewOrderDTO newOrderDTO1 = newOrderService.addNewOrder(newOrderDTO);
        if(newOrderDTO1 != null){
            map.put("status",1);
            map.put("data",newOrderDTO1);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","New Order Not Added");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updateneworder")
    public ResponseEntity<?> updateNewOrder(@RequestBody NewOrderDTO newOrderDTO){
        Map<String, Object> map = new LinkedHashMap<>();
        NewOrderDTO newOrderDTO1 = newOrderService.updateNewOrder(newOrderDTO);
        if(newOrderDTO1 != null){
            map.put("status",1);
            map.put("data",newOrderDTO1);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","New Order Not Updated");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getneworderbyid/{newOrderId}")
    public ResponseEntity<?> getNewOrderById(@PathVariable int newOrderId){
        Map<String, Object> map = new LinkedHashMap<>();
        NewOrderDTO newOrderDTO = newOrderService.getNewOrderById(newOrderId);
        if(newOrderDTO != null){
            map.put("status",1);
            map.put("data",newOrderDTO);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","New Order id Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteneworder/{newOrderId}")
    public ResponseEntity<?> deleteNewOrder(@PathVariable int newOrderId){
        Map<String, Object> map = new LinkedHashMap<>();
        boolean deleted = newOrderService.deleteNewOrder(newOrderId);
        if(deleted){
            map.put("status",1);
            map.put("data",deleted);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","New Order Not Deleted");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

}
