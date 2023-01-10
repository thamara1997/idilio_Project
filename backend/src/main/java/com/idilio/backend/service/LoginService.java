package com.idilio.backend.service;

import com.idilio.backend.dto.LoginDTO;
import com.idilio.backend.entity.Login;
import com.idilio.backend.repository.LoginRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class LoginService {
    @Autowired
    private LoginRepo loginRepo;
    @Autowired
    private ModelMapper modelMapper;

    public LoginDTO saveLogin(LoginDTO loginDTO){
        loginRepo.save(modelMapper.map(loginDTO, Login.class));
        return loginDTO;
    }

    public List<LoginDTO> getAllLogin(){
        List<Login>loginList = loginRepo.findAll();
        return modelMapper.map(loginList, new TypeToken<List<LoginDTO>>(){}.getType());
    }

    public LoginDTO updateLogin(LoginDTO loginDTO){
        loginRepo.save(modelMapper.map(loginDTO, Login.class));
        return loginDTO;
    }

    public boolean deleteLogin(LoginDTO loginDTO){
        loginRepo.delete(modelMapper.map(loginDTO,Login.class));
        return true;
    }

}
