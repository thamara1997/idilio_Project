package com.idilio.backend.repository;

import com.idilio.backend.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface LoginRepo extends JpaRepository<Login,Integer> {
    @Transactional
    @Modifying
    @Query("UPDATE Login l SET l.password = ?1 WHERE l.loginId = ?2")
    void updatePassword(String password, int loginId);

    @Query(value = "SELECT * FROM idilio.login WHERE email = ?1", nativeQuery = true)
    Login validateEmail(String email);

    @Query(value = "SELECT * FROM idilio.login WHERE login_id = ?1", nativeQuery = true)
    Login getLoginDetailsById(int loginId);
}
