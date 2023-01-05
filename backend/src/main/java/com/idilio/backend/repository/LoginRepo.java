package com.idilio.backend.repository;

import com.idilio.backend.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepo extends JpaRepository<Login,Integer> {
}
