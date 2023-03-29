package com.idilio.backend.service;

import com.idilio.backend.dto.Payment2DTO;
import com.idilio.backend.dto.PaymentDTO;

import java.util.List;

public interface Payment2Service {
    List<Payment2DTO> getAllPayments2();

    Payment2DTO addPayment2(Payment2DTO payment2DTO);

    Payment2DTO getPayment2ById(int payment2Id);
}
