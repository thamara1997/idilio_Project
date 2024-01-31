package com.idilio.backend.service;

import com.idilio.backend.dto.ResourcesDTO;
import com.idilio.backend.dto.UsersOrdersDTO;

import java.util.List;

public interface UsersOrdersService {
    List<UsersOrdersDTO> getAllUsersOrders();

    UsersOrdersDTO addUsersOrders(UsersOrdersDTO usersOrdersDTO);

    boolean deleteUsersOrders(int usersOrdersId);

    UsersOrdersDTO getUsersOrdersById(int usersOrdersId);

    List<UsersOrdersDTO> getOrdersByUserId(int userId);

    UsersOrdersDTO getUsersOrdersByResourceOrderId(int resourceOrderId);

    boolean deleteUsersOrdersByResourceOrderId(int resourceOrderId);
}
