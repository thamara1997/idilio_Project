package com.idilio.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LoginDTO {
    private int loginId;
    private String email;
    private String password;
    private int userId;

    public LoginDTO(String email, String password){
        this.email = email;
        this.password = password;
    }
}
