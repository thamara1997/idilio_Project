package com.idilio.backend.service;

import com.idilio.backend.dto.ResourceOrderDTO;

import java.util.List;

public interface ResourceOrderService {
    List<ResourceOrderDTO> getAllResourceOrders();

    ResourceOrderDTO addResourceOrder (ResourceOrderDTO resourceOrderDTO);

    boolean deleteResourceOrder(int resourceOrderId);

    ResourceOrderDTO updateResourceOrder(ResourceOrderDTO resourceOrderDTO);

    ResourceOrderDTO getResourceOrderById(int resourceOrderId);
}
