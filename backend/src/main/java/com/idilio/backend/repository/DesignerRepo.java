package com.idilio.backend.repository;

import com.idilio.backend.entity.Designer;
import com.idilio.backend.entity.Resources;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface DesignerRepo extends JpaRepository<Designer,Integer> {
    @Transactional
    @Modifying
    @Query("update Designer d set d.orderCount = ?1, d.level = ?2, d.fbURL = ?3, d.instaURL = ?4, d.linkedinURL = ?5, d.cv = ?6, d.approved = ?7 where d.designerId = ?8")
    int updateDesigner(int orderCount, int level, String fbURL, String instaURL, String linkedinURL,String cv, Boolean approved, int designerId);
    @Query("select d from Designer d where d.designerId = ?1")
    Designer getDesignerById(int designerId);

    @Query(value = "select * from idilio.designer where approved=0", nativeQuery = true)
    List<Designer> getDesignerByApprove(int approved);

    @Query(value = "select * from idilio.designer where approved=1", nativeQuery = true)
    List<Designer> getDesignersByApproved(int approved);

}
