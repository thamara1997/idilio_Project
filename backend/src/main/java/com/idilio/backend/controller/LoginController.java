package com.idilio.backend.controller;

import com.idilio.backend.dto.LoginDTO;
import com.idilio.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="api/v1/login")
@CrossOrigin
public class LoginController {
    @Autowired
    private LoginService loginService;

    @GetMapping("/getLogin")
    public List<LoginDTO> getLogin(){
        return loginService.getAllLogin();
    }

    @PostMapping("/saveLogin")
    public LoginDTO saveLogin(@RequestBody LoginDTO loginDTO){
        return loginService.saveLogin(loginDTO);
    }

    @PutMapping("/updateLogin")
    public LoginDTO updateLogin(@RequestBody LoginDTO loginDTO){
        return loginService.updateLogin(loginDTO);
    }

    @DeleteMapping("/deleteLogin")
    public boolean deleteUser(@RequestBody LoginDTO loginDTO){
        return loginService.deleteLogin(loginDTO);
    }

}
