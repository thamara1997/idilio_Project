package com.idilio.backend.dto;

import com.idilio.backend.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class DesignerDTO {
    private int designerId;
    private int orderCount;
    private int level;
    private int userId;
}
