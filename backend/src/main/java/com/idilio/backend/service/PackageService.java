package com.idilio.backend.service;

import com.idilio.backend.dto.PackageDTO;

import java.util.List;

public interface PackageService {
    List<PackageDTO> getAllPackages();

    PackageDTO addPackage(PackageDTO packageDTO);

    PackageDTO getPackageById(int packageId);

    PackageDTO updatePackage(PackageDTO packageDTO);
}
