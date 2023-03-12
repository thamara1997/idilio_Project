package com.idilio.backend.repository;

import com.idilio.backend.dto.ResourcesDTO;
import com.idilio.backend.entity.Resources;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface ResourcesRepo extends JpaRepository<Resources,Integer> {
    @Transactional
    @Modifying
    @Query("""
            update Resources r set r.title = ?1, r.description = ?2, r.amount = ?3, r.category = ?4, r.searchTags = ?5
            where r.resourceId = ?6""")
    int updateResource(String title, String description, double amount, String category, String searchTags, int resourceId);

    @Query("select r from Resources r where r.resourceId = ?1")
    Resources getResourceById(int resourceId);

    @Query("select r from Resources r where r.designer = ?1")
    Resources getResourcesByDesignerId(Integer designerId);

}
