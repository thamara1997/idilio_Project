package com.idilio.backend.service;

import com.idilio.backend.dto.ResourceOrderDTO;
import com.idilio.backend.dto.ResourceOrderFullDTO;

import java.util.List;

public interface ResourceOrderService {
    List<ResourceOrderFullDTO> getAllResourceOrders();

    ResourceOrderDTO addResourceOrder (ResourceOrderDTO resourceOrderDTO);

    boolean deleteResourceOrder(int resourceOrderId);

    ResourceOrderFullDTO updateResourceOrder(ResourceOrderDTO resourceOrderDTO);

    ResourceOrderFullDTO getResourceOrderById(int resourceOrderId);
}
