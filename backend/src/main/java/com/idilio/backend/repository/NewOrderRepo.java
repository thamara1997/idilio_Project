package com.idilio.backend.repository;

import com.idilio.backend.entity.NewOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewOrderRepo extends JpaRepository<NewOrder,Integer> {

}
