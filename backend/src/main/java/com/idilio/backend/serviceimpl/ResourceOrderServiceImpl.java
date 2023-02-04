package com.idilio.backend.serviceimpl;

import com.idilio.backend.dto.ResourceOrderDTO;
import com.idilio.backend.entity.ResourceOrder;
import com.idilio.backend.repository.ResourceOrderRepo;
import com.idilio.backend.service.ResourceOrderService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ResourceOrderServiceImpl implements ResourceOrderService {

    @Autowired
    private ResourceOrderRepo resourceOrderRepo;

    @Autowired
    private ModelMapper modelMapper;


    public ResourceOrderDTO convertToDTO(ResourceOrder r){
        ResourceOrderDTO newResourceOrder=ResourceOrderDTO
                .builder()
                .resourceOrderId(r.getResourceOrderId())
                .attachments(r.getAttachments())
                .reqDraw(r.getReqDraw())
                .reqDescription(r.getReqDescription())
                .projectName(r.getProjectName())
                .resourceId(r.getResources().getResourceId())
                .build();
//        newResourceOrder.setResourceOrderId(resourceOrder.getResourceOrderId());
//        newResourceOrder.setProjectName(resourceOrder.getProjectName());
//        newResourceOrder.setReqDescription(resourceOrder.getReqDescription());
//        newResourceOrder.setReqDraw(resourceOrder.getReqDraw());
//        newResourceOrder.setAttachments(resourceOrder.getAttachments());
//        newResourceOrder.setResourceId(resourceOrder.getResources().getResourceId());

        return  newResourceOrder;
    }
    @Override
    public List<ResourceOrderDTO> getAllResourceOrders() {
        try{
            List<ResourceOrder> list = resourceOrderRepo.findAll();

            List<ResourceOrderDTO> list1=new ArrayList<ResourceOrderDTO>();

            for(ResourceOrder r: list){
                list1.add(convertToDTO(r));
            }

            //this is working
            //return list1;

            //this is not working
            return modelMapper.map(list, new TypeToken<List<ResourceOrderDTO>>(){}.getType());
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }
}
