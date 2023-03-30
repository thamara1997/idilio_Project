package com.idilio.backend.serviceimpl;

import com.idilio.backend.dto.*;
import com.idilio.backend.entity.*;
import com.idilio.backend.entity.Package;
import com.idilio.backend.repository.ProgressRepo;
import com.idilio.backend.repository.ResourceOrderRepo;
import com.idilio.backend.repository.ResourcesRepo;
import com.idilio.backend.service.ResourceOrderService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResourceOrderServiceImpl implements ResourceOrderService {

    @Autowired
    private ResourceOrderRepo resourceOrderRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ResourcesRepo resourcesRepo;

    @Autowired
    private ProgressRepo progressRepo;

    @Override
    public List<ResourceOrderFullDTO> getAllResourceOrders() {
        try{
            List<ResourceOrder> list = resourceOrderRepo.findAll();
            return modelMapper.map(list, new TypeToken<List<ResourceOrderFullDTO>>(){}.getType());
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public ResourceOrderDTO addResourceOrder(ResourceOrderDTO resourceOrderDTO) {
        try{
            ResourceOrder resourceOrder = modelMapper.map(resourceOrderDTO, ResourceOrder.class);
            ResourceOrder resourceOrder1 = resourceOrderRepo.save(resourceOrder);

            return modelMapper.map(resourceOrder1, new TypeToken<ResourceOrderDTO>(){}.getType());
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public boolean deleteResourceOrder(int resourceOrderId) {
        try{
            ResourceOrder resourceOrder = resourceOrderRepo.getReferenceById(resourceOrderId);
            if(resourceOrder==null){
                return false;
            }else{
                resourceOrderRepo.deleteById(resourceOrderId);
                return true;
            }
        }
        catch (Exception e){
            System.out.println(e.toString());
            return false;
        }
    }

//    @Override
//    public ResourceOrderFullDTO updateResourceOrder(ResourceOrderDTO resourceOrderDTO) {
//        try{
//            Resources resources = resourcesRepo.getResourceById(resourceOrderDTO.getResourcesResourceId());
//
//            if(resources!=null){
//                resourceOrderRepo.updateResourceOrder(resourceOrderDTO.getProjectName(),resourceOrderDTO.getReqDescription(),resourceOrderDTO.getReqDraw(),resourceOrderDTO.getAttachments(),resourceOrderDTO.getRate(),resourceOrderDTO.getReview(),resourceOrderDTO.getResourceOrderId());
//                return getResourceOrderById(resourceOrderDTO.getResourceOrderId());
//            }else{
//                return null;
//            }
//        }
//        catch(Exception e){
//            System.out.println(e.toString());
//            return null;
//        }
//    }

    @Override
    public ResourceOrderFullDTO updateResourceOrder(ResourceOrderDTO resourceOrderDTO) {
        try {
            Resources resources = resourcesRepo.getResourceById(resourceOrderDTO.getResourcesResourceId());
            Progress progress = progressRepo.getReferenceById(resourceOrderDTO.getProgressId());

            if (resources != null && progress != null) {
                ResourceOrder resourceOrder = resourceOrderRepo.getById(resourceOrderDTO.getResourceOrderId());

                resourceOrder.setProjectName(resourceOrderDTO.getProjectName());
                resourceOrder.setReqDescription(resourceOrderDTO.getReqDescription());
                resourceOrder.setReqDraw(resourceOrderDTO.getReqDraw());
                resourceOrder.setAttachments(resourceOrderDTO.getAttachments());
                resourceOrder.setRate(resourceOrderDTO.getRate());
                resourceOrder.setReview(resourceOrderDTO.getReview());
                resourceOrder.setResources(resources);
                resourceOrder.setProgress(progress);

                resourceOrderRepo.save(resourceOrder);

                return getResourceOrderById(resourceOrderDTO.getResourceOrderId());
            } else {
                return null;
            }
        } catch (Exception e) {
            System.out.println(e.toString());
            return null;
        }
    }


    @Override
    public ResourceOrderFullDTO getResourceOrderById(int resourceOrderId) {
        try{
            ResourceOrder resourceOrder = resourceOrderRepo.getReferenceById(resourceOrderId);
            if(resourceOrder!=null){
                return modelMapper.map(resourceOrder, new TypeToken<ResourceOrderFullDTO>(){}.getType());
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


}
