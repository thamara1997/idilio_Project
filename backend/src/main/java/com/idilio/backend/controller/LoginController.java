package com.idilio.backend.controller;

import com.idilio.backend.dto.LoginDTO;
import com.idilio.backend.dto.UserFullDTO;
import com.idilio.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("api/v1/login")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @GetMapping("/getalllogin")
    public ResponseEntity<?> getAllLogin(){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        List<LoginDTO> loginlist = loginService.getAllLogin();
        if(!loginlist.isEmpty()){
            map.put("status",1);
            map.put("data",loginlist);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }else{
            map.clear();
            map.put("status",0);
            map.put("message","Login List Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getlogin/{id}")
    public ResponseEntity<?> getLoginById(@PathVariable int id){
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        LoginDTO login = loginService.getLoginById(id);
        if(login != null){
            map.put("status",1);
            map.put("data",login);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }else{
            map.clear();
            map.put("status",0);
            map.put("message","Login List Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addlogin")
    public ResponseEntity<?> addLogin(@RequestBody UserFullDTO userdata)throws NoSuchAlgorithmException {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        LoginDTO ldto = loginService.addLogin(userdata);
        if(ldto != null){
            map.put("status",1);
            map.put("data",ldto);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }else{
            map.clear();
            map.put("status",0);
            map.put("message","Login Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updatepassword")
    public ResponseEntity<?> updatePassword(@RequestBody LoginDTO logindata)throws NoSuchAlgorithmException {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        LoginDTO ldto = loginService.updatePassword(logindata);
        if(ldto != null){
            map.put("status",1);
            map.put("data",ldto);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }else{
            map.clear();
            map.put("status",0);
            map.put("message","Update Password Failed");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/validateemail")
    public ResponseEntity<?> validateEmail(@RequestBody String email)throws NoSuchAlgorithmException {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        boolean valid = loginService.validateEmail(email);
        if(valid){
            map.put("status",1);
            map.put("data","Email is Available");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }else{
            map.clear();
            map.put("status",0);
            map.put("message","Email is not Available");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }
}
