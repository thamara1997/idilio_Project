package com.idilio.backend.serviceimpl;

import com.idilio.backend.dto.ResourceOrderDTO;
import com.idilio.backend.dto.ResourceOrderFullDTO;
import com.idilio.backend.entity.ResourceOrder;
import com.idilio.backend.entity.Resources;
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

    @Override
    public ResourceOrderFullDTO updateResourceOrder(ResourceOrderDTO resourceOrderDTO) {
        try{
            Resources resources = resourcesRepo.getResourceById(resourceOrderDTO.getResourcesResourceId());

            if(resources!=null){
                resourceOrderRepo.updateResourceOrder(resourceOrderDTO.getProjectName(),resourceOrderDTO.getReqDescription(),resourceOrderDTO.getReqDraw(),resourceOrderDTO.getAttachments(),resourceOrderDTO.getRate(),resourceOrderDTO.getReview(),resourceOrderDTO.getResourceOrderId());
                return getResourceOrderById(resourceOrderDTO.getResourceOrderId());
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
