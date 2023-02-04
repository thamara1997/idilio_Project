package com.idilio.backend.dto;

import com.idilio.backend.entity.User;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class DesignerDTO {
    private int designerId;
    private int orderCount;
    private int level;
    private int userId;
}
