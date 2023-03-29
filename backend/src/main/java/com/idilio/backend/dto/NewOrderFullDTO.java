package com.idilio.backend.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@Setter
@Data
public class NewOrderFullDTO {
    private int newOrderId;
    private String projectName;
    private String reqDescription;
    private String reqDraw;
    private String attachments;
    private String review;
    private int rate;
    private int designerId;
    private int packageId;
    private int progressId;
    private int userId;
    private int payment2Id;
}
