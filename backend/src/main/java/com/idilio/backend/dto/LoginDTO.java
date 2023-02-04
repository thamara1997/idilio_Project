package com.idilio.backend.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
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
