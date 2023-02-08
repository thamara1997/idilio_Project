package com.idilio.backend.repository;

import com.idilio.backend.entity.UsersOrders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersOrdersRepo extends JpaRepository<UsersOrders,Integer> {

}
