package com.idilio.backend.repository;

import com.idilio.backend.entity.Package;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface PackageRepo extends JpaRepository<Package,Integer> {
    @Transactional
    @Modifying
    @Query("update Package p set p.name = ?1, p.category = ?2, p.amount = ?3 where p.packageId = ?4")
    int updatePackage(String name, String category, double amount, int packageId);

}
