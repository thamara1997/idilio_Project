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
    private String fbURL;
    private String instaURL;
    private String linkedinURL;
    private String cv;
    private boolean approved;
    private int userId;
}
