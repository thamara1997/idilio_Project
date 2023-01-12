package com.idilio.backend.dto;

import com.idilio.backend.entity.Login;
import lombok.*;

import java.sql.Timestamp;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDTO {
    private int userId;
    private String firstName;
    private String lastName;
    private String country;
    private String isAdmin;
    private Timestamp lastLogIn;
    private LoginDTO login;
}
