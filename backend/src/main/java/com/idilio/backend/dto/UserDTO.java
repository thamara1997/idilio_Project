package com.idilio.backend.dto;

import com.idilio.backend.entity.Designer;
import com.idilio.backend.entity.Role;
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
    private String fbURL;
    private String instaURL;
    private String linkedinURL;
    private Role role;
    private Timestamp lastLogIn;
    private DesignerDTO designer;
}
