package com.idilio.backend.repository;

import com.idilio.backend.entity.ResourceOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface ResourceOrderRepo extends JpaRepository<ResourceOrder,Integer> {
    @Transactional
    @Modifying
    @Query("""
            update ResourceOrder r set r.projectName = ?1, r.reqDescription = ?2, r.reqDraw = ?3, r.attachments = ?4, r.rate = ?5, r.review = ?6
            where r.resourceOrderId = ?7""")
    int updateResourceOrder(String projectName, String reqDescription, String reqDraw, String attachments, int rate, String review, int resourceOrderId);

}
