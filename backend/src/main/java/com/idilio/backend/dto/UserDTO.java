package com.idilio.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDTO {
    private int userId;
    private String firstName;
    private String lastName;
    private String country;
    private String role;
    private Timestamp lastLogIn;
}
