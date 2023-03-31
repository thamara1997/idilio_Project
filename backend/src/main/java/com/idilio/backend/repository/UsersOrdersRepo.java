package com.idilio.backend.repository;

import com.idilio.backend.entity.Designer;
import com.idilio.backend.entity.Resources;
import com.idilio.backend.entity.UsersOrders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UsersOrdersRepo extends JpaRepository<UsersOrders,Integer> {
    @Query(value = "select * from idilio.users_orders where user_id=?1", nativeQuery = true)
    List<UsersOrders> getOrdersByUserId(int userId);

    @Query(value = "select * from idilio.users_orders where resource_order_id=?1", nativeQuery = true)
    UsersOrders getUserByResourceOrderId(int resourceOrderId);
}
