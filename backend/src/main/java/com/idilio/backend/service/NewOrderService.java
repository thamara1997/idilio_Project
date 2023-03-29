package com.idilio.backend.service;

import com.idilio.backend.dto.NewOrderDTO;
import com.idilio.backend.dto.NewOrderFullDTO;

import java.util.List;

public interface NewOrderService {
    List<NewOrderFullDTO> getAllNewOrders();

    NewOrderDTO addNewOrder(NewOrderDTO newOrderDTO);

    boolean deleteNewOrder(int newOrderId);

    NewOrderDTO updateNewOrder(NewOrderDTO newOrderDTO);

    NewOrderDTO getNewOrderById(int newOrderId);
}
