package com.idilio.backend.controller;

import com.idilio.backend.dto.ResourcesDTO;
import com.idilio.backend.dto.UsersOrdersDTO;
import com.idilio.backend.repository.UsersOrdersRepo;
import com.idilio.backend.service.UsersOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("api/v1/usersorders")
public class UsersOrdersController {
    @Autowired
    private UsersOrdersService usersOrdersService;

    @Autowired
    private UsersOrdersRepo usersOrdersRepo;

    @GetMapping("/get/getallusersorders")
    public ResponseEntity<?> getAllUsersOrders(){
        Map<String, Object> map = new LinkedHashMap<>();
        List<UsersOrdersDTO> usersOrdersList = usersOrdersService.getAllUsersOrders();
        if(!usersOrdersList.isEmpty()){
            map.put("status",1);
            map.put("data",usersOrdersList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Users and Orders List Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addusersorders")
    public ResponseEntity<?> addUsersOrders(@RequestBody UsersOrdersDTO usersOrdersDTO){
        Map<String, Object> map = new LinkedHashMap<>();
        UsersOrdersDTO usersOrdersDTO1= usersOrdersService.addUsersOrders(usersOrdersDTO);
        if(usersOrdersDTO1 != null){
            map.put("status",1);
            map.put("data",usersOrdersDTO1);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","User and Order Not Added");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteusersorders/{usersOrdersId}")
    public ResponseEntity<?> deleteUsersOrders(@PathVariable int usersOrdersId){
        Map<String, Object> map = new LinkedHashMap<>();
        boolean deleted = usersOrdersService.deleteUsersOrders(usersOrdersId);
        if(deleted){
            map.put("status",1);
            map.put("data",deleted);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","User and Order Not Deleted");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/getusersordersbyid/{usersOrdersId}")
    public ResponseEntity<?> getUsersOrdersById(@PathVariable int usersOrdersId){
        Map<String, Object> map = new LinkedHashMap<>();
        UsersOrdersDTO usersOrdersDTO = usersOrdersService.getUsersOrdersById(usersOrdersId);
        if(usersOrdersDTO != null){
            map.put("status",1);
            map.put("data",usersOrdersDTO);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","User Order id Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/getordersbyuserid/{userId}")
    public ResponseEntity<?> getOrdersByUserId(@PathVariable int userId)throws NullPointerException{
        Map<String, Object> map = new LinkedHashMap<>();
        List<UsersOrdersDTO> orderslist = usersOrdersService.getOrdersByUserId(userId);
        if(orderslist !=null){
            map.put("status",1);
            map.put("data",orderslist);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Orders Not Found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/getusersordersbyresourceorderid/{resourceOrderId}")
    public ResponseEntity<?> getUsersOrdersByResourceOrderId(@PathVariable int resourceOrderId)throws NullPointerException{
        Map<String, Object> map = new LinkedHashMap<>();
        UsersOrdersDTO uo = usersOrdersService.getUsersOrdersByResourceOrderId(resourceOrderId);
        if(uo !=null){
            map.put("status",1);
            map.put("data",uo);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Users Orders Not Found for Resource Order Id");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteusersordersbyreourceid/{resourceOrderId}")
    public ResponseEntity<?> deleteByResourceOrderId(@PathVariable int resourceOrderId){
        Map<String, Object> map = new LinkedHashMap<>();
        boolean deleted = usersOrdersService.deleteUsersOrdersByResourceOrderId(resourceOrderId);
        if(deleted){
            map.put("status",1);
            map.put("data",deleted);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","User and Order Not Deleted");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }
}
