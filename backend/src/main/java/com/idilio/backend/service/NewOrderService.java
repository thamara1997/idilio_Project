package com.idilio.backend.service;

import com.idilio.backend.dto.NewOrderDTO;

import java.util.List;

public interface NewOrderService {
    List<NewOrderDTO> getAllNewOrders();
}
