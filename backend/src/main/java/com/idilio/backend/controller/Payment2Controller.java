package com.idilio.backend.controller;

import com.idilio.backend.dto.Payment2DTO;
import com.idilio.backend.dto.PaymentDTO;
import com.idilio.backend.service.Payment2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("api/v1/payment2")
public class Payment2Controller {
    @Autowired
    private Payment2Service payment2Service;

    @GetMapping("/get/getallpayments2")
    public ResponseEntity<?> getAllPayments2(){
        Map<String, Object> map = new LinkedHashMap<>();
        List<Payment2DTO> paymentList = payment2Service.getAllPayments2();
        if(!paymentList.isEmpty()){
            map.put("status",1);
            map.put("data",paymentList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Payments List Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addpayment2")
    public ResponseEntity<?> addPayment2(@RequestBody Payment2DTO payment2DTO){
        Map<String, Object> map = new LinkedHashMap<>();
        Payment2DTO paymentDTO1 = payment2Service.addPayment2(payment2DTO);
        if(paymentDTO1 != null){
            map.put("status",1);
            map.put("data",paymentDTO1);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Payment Not Added");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/getpayment2byid/{payment2Id}")
    public ResponseEntity<?> getPayment2ById(@PathVariable int payment2Id){
        Map<String, Object> map = new LinkedHashMap<>();
        Payment2DTO paymentDTO = payment2Service.getPayment2ById(payment2Id);
        if(paymentDTO != null){
            map.put("status",1);
            map.put("data",paymentDTO);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Payment id Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }
}
