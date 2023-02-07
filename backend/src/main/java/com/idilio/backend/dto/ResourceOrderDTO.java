package com.idilio.backend.dto;

import com.idilio.backend.entity.Resources;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@Setter
@Data
public class ResourceOrderDTO {
    private int resourceOrderId;
    private String projectName;
    private String reqDescription;
    private String reqDraw;
    private String attachments;
    private int rate;
    private String review;
    private int resourcesResourceId;
    private int progressId;
    private int paymentId;

}
