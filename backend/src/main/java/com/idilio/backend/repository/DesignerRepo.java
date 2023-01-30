package com.idilio.backend.repository;

import com.idilio.backend.entity.Designer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface DesignerRepo extends JpaRepository<Designer,Integer> {
    @Transactional
    @Modifying
    @Query("update Designer d set d.orderCount = ?1, d.level = ?2 where d.designerId = ?3")
    int updateDesigner(int orderCount, int level, int designerId);
    @Query("select d from Designer d where d.designerId = ?1")
    Designer getDesignerById(int designerId);

}
