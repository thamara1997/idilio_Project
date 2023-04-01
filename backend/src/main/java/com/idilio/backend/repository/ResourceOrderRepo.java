package com.idilio.backend.repository;

import com.idilio.backend.entity.ResourceOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ResourceOrderRepo extends JpaRepository<ResourceOrder,Integer> {
    @Transactional
    @Modifying
    @Query("""
            update ResourceOrder r set r.projectName = ?1, r.reqDescription = ?2, r.reqDraw = ?3, r.attachments = ?4, r.rate = ?5, r.review = ?6
            where r.resourceOrderId = ?7""")
    int updateResourceOrder(String projectName, String reqDescription, String reqDraw, String attachments, int rate, String review, int resourceOrderId);

    @Query(value = "SELECT ro.resource_order_id, ro.resource_id, ro.attachments, ro.project_name,ro.rate,ro.req_description,ro.req_draw,ro.review,ro.progress_id FROM idilio.resource_order ro WHERE ro.resource_id IN (SELECT r.resource_id  FROM idilio.resources r  WHERE r.designer_id = :designerId)", nativeQuery = true)
    List<ResourceOrder> getResourceOrderByDesignerId(int designerId);
}
