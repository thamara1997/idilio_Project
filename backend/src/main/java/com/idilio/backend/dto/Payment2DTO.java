package com.idilio.backend.dto;

import lombok.*;

import java.sql.Timestamp;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class PaymentDTO2 {
    private int payment2Id;
    private double amount;
    private Timestamp paidDate;
    private int newOrderId;
}
