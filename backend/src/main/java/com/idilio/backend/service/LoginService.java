package com.idilio.backend.service;

import com.idilio.backend.repository.LoginRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class LoginService {
    @Autowired
    private LoginRepo loginrepo;
    private ModelMapper modelMapper;
}
