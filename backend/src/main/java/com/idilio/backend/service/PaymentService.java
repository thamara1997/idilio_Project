package com.idilio.backend.service;

import com.idilio.backend.dto.PaymentDTO;

import java.util.List;

public interface PaymentService {
    List<PaymentDTO> getAllPayments();

    PaymentDTO addPayment(PaymentDTO paymentDTO);

    PaymentDTO getPaymentById(int paymentId);
}
