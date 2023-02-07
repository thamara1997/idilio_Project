package com.idilio.backend.repository;

import com.idilio.backend.entity.Progress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;

public interface ProgressRepo extends JpaRepository<Progress,Integer> {
    @Transactional
    @Modifying
    @Query("update Progress p set p.stage = ?1, p.name = ?2, p.changeTime = ?3 where p.progressId = ?4")
    int updateProgress(int stage, String name, Timestamp changeTime, int progressId);

}
