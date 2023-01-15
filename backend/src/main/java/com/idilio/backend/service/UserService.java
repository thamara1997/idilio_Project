package com.idilio.backend.service;

import com.idilio.backend.dto.UserDTO;
import com.idilio.backend.dto.UserFullDTO;

import java.security.NoSuchAlgorithmException;
import java.util.List;

public interface UserService {
    List<UserDTO> getAllUsers();
    UserDTO addUser(UserFullDTO userdata) throws NoSuchAlgorithmException;
    UserDTO getUserById(int userid);
    UserDTO updateUser(UserFullDTO userdata);
    boolean deleteUser(int userid);
}
