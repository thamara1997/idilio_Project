package com.idilio.backend.serviceimpl;

import com.idilio.backend.dto.ResourcesDTO;
import com.idilio.backend.entity.Designer;
import com.idilio.backend.entity.Resources;
import com.idilio.backend.repository.DesignerRepo;
import com.idilio.backend.repository.ResourcesRepo;
import com.idilio.backend.service.ResourceService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResourceServiceImpl implements ResourceService {

    @Autowired
    private ResourcesRepo resourcesRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private DesignerRepo designerRepo;

    @Override
    public List<ResourcesDTO> getAllResources() {
        try{
            List<Resources> list = resourcesRepo.findAll();
            return modelMapper.map(list, new TypeToken<List<ResourcesDTO>>(){}.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public ResourcesDTO addResource(ResourcesDTO resourcesDTO) {
        try{
            Resources resources = modelMapper.map(resourcesDTO , Resources.class);
            Resources resources1 = resourcesRepo.save(resources);
            return modelMapper.map(resources1, new TypeToken<ResourcesDTO>(){}.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public boolean deleteResource(int resourceId) {
        try{
            Resources resources = resourcesRepo.getReferenceById(resourceId);
            if(resources==null){
                return false;
            }else{
                resourcesRepo.deleteById(resourceId);
                return true;
            }
        }
        catch(Exception e){
            System.out.println(e.toString());
            return false;
        }
    }

    @Override
    public ResourcesDTO updateResource(ResourcesDTO resourcesDTO) {
        try{
            Designer designerDTO = designerRepo.getDesignerById(resourcesDTO.getDesignerId());
            if(designerDTO!=null){
                resourcesRepo.updateResource(resourcesDTO.getTitle(),resourcesDTO.getDescription(),resourcesDTO.getAmount(),resourcesDTO.getCategory(),resourcesDTO.getSearchTags(),resourcesDTO.getResourceId());
                return getResourceById(resourcesDTO.getResourceId());
            }else{
                return null;
            }
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public ResourcesDTO getResourceById(int resourceId) {
        try{
            Resources resources = resourcesRepo.getReferenceById(resourceId);
            if(resources!=null){
                return modelMapper.map(resources, new TypeToken<ResourcesDTO>(){}.getType());
            }
            else{
                return null;
            }
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public List<ResourcesDTO> getResourcesByDesignerId(Integer designerId) {
        try{
            List<Resources> list = (List<Resources>) resourcesRepo.getResourcesByDesignerId(designerId);
            return modelMapper.map(list, new TypeToken<List<ResourcesDTO>>(){}.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }


}
