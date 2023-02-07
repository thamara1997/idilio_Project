package com.idilio.backend.dto;

import lombok.*;

import java.sql.Timestamp;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class PaymentDTO {
    private int paymentId;
    private double amount;
    private Timestamp paidDate;
}
