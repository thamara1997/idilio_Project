package com.idilio.backend.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class UsersOrdersDTO {
    private int usersOrdersId;
    private int resourceOrderId;
    private int userId;
}
