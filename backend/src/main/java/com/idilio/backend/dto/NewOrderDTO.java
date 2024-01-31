package com.idilio.backend.dto;

import com.idilio.backend.entity.Progress;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class NewOrderDTO {
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
//    private int paymentId;

}
