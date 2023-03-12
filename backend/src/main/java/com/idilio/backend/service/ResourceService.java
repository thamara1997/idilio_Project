package com.idilio.backend.service;

import com.idilio.backend.dto.DesignerDTO;
import com.idilio.backend.dto.ResourcesDTO;
import com.idilio.backend.entity.Designer;

import java.util.List;

public interface ResourceService {
    List<ResourcesDTO> getAllResources();

    ResourcesDTO addResource(ResourcesDTO resourcesDTO);

    boolean deleteResource(int resourceId);

    ResourcesDTO updateResource(ResourcesDTO resourcesDTO);

    ResourcesDTO getResourceById(int resourceId);

    List<ResourcesDTO> getResourcesByDesignerId(Integer designerId);

}
