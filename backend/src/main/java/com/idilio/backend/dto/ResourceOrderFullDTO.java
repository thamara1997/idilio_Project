package com.idilio.backend.dto;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@Setter
@Data
public class ResourceOrderFullDTO {
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
