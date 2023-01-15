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

    public LoginDTO(String email, String password){
        this.email = email;
        this.password = password;
    }
}
