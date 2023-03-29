package com.idilio.backend.controller;

import com.idilio.backend.dto.PackageDTO;
import com.idilio.backend.dto.PaymentDTO;
import com.idilio.backend.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("api/v1/payment")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @GetMapping("/getallpayments")
    public ResponseEntity<?> getAllPayments(){
        Map<String, Object> map = new LinkedHashMap<>();
        List<PaymentDTO> paymentList = paymentService.getAllPayments();
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

    @PostMapping("/addpayment")
    public ResponseEntity<?> addPayment(@RequestBody PaymentDTO paymentDTO){
        Map<String, Object> map = new LinkedHashMap<>();
        PaymentDTO paymentDTO1 = paymentService.addPayment(paymentDTO);
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

    @GetMapping("/getpaymentbyid/{paymentId}")
    public ResponseEntity<?> getPaymentById(@PathVariable int paymentId){
        Map<String, Object> map = new LinkedHashMap<>();
        PaymentDTO paymentDTO = paymentService.getPaymentById(paymentId);
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
