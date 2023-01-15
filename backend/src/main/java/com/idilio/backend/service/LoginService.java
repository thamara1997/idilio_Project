package com.idilio.backend.service;

import com.idilio.backend.dto.LoginDTO;
import com.idilio.backend.dto.UserFullDTO;

import java.security.NoSuchAlgorithmException;
import java.util.List;

public interface LoginService {
    LoginDTO addLogin(UserFullDTO userdata) throws NoSuchAlgorithmException;
    LoginDTO updatePassword(LoginDTO logindata) throws NoSuchAlgorithmException;

    LoginDTO getLoginById(int loginid);
    List<LoginDTO> getAllLogin();
    Boolean validateEmail(String email);
}
