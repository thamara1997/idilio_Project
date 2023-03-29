package com.idilio.backend.repository;

import com.idilio.backend.entity.NewOrder;
import com.idilio.backend.entity.Progress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface NewOrderRepo extends JpaRepository<NewOrder,Integer> {
    @Transactional
    @Modifying
    @Query("""
            update NewOrder n set n.projectName = ?1, n.reqDescription = ?2, n.reqDraw = ?3, n.attachments = ?4, n.review = ?5, n.rate = ?6
            where n.newOrderId = ?7""")
    int UpdateNewOrder(String projectName, String reqDescription, String reqDraw, String attachments, String review, int rate, int newOrderId);

}
