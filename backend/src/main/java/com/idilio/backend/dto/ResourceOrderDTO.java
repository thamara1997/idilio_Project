package com.idilio.backend.dto;

import com.idilio.backend.entity.Resources;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ResourceOrderDTO {
    private int resourceOrderId;
    private String projectName;
    private String reqDescription;
    private String reqDraw;
    private String attachments;
    private int resourceId;
}
