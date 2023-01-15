package com.idilio.backend.repository;

import com.idilio.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
    @Transactional
    @Modifying
    @Query("UPDATE User u SET u.firstName = ?1, u.lastName = ?2, u.country = ?3, u.fbURL = ?4, u.instaURL = ?5, u.linkedinURL = ?6 WHERE u.userId = ?7")
    void updateUser(String firstName, String lastName, String country, String fbURL, String instaURL,String linkedinURL, int userId);

    @Query(value = "SELECT * FROM idilio.user WHERE user_id=?1 LIMIT 1", nativeQuery = true)
    User getUserById(@Param(value="userId") int userid);

    void deleteById(int userId);
}
