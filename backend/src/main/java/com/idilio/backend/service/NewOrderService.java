package com.idilio.backend.service;

import com.idilio.backend.dto.NewOrderDTO;

import java.util.List;

public interface NewOrderService {
    List<NewOrderDTO> getAllNewOrders();

    NewOrderDTO addNewOrder(NewOrderDTO newOrderDTO);

    boolean deleteNewOrder(int newOrderId);

    NewOrderDTO updateNewOrder(NewOrderDTO newOrderDTO);

    NewOrderDTO getNewOrderById(int newOrderId);
}
