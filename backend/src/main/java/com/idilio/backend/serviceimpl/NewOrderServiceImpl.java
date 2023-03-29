package com.idilio.backend.serviceimpl;

import com.idilio.backend.dto.NewOrderDTO;
import com.idilio.backend.dto.NewOrderFullDTO;
import com.idilio.backend.dto.ResourcesDTO;
import com.idilio.backend.entity.Designer;
import com.idilio.backend.entity.NewOrder;
import com.idilio.backend.entity.Package;
import com.idilio.backend.entity.Resources;
import com.idilio.backend.repository.DesignerRepo;
import com.idilio.backend.repository.NewOrderRepo;
import com.idilio.backend.repository.PackageRepo;
import com.idilio.backend.service.NewOrderService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewOrderServiceImpl implements NewOrderService {
    @Autowired
    private NewOrderRepo newOrderRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private DesignerRepo designerRepo;

    @Autowired
    private PackageRepo packageRepo;

    @Override
    public List<NewOrderFullDTO> getAllNewOrders() {
        try{
            List<NewOrder> list = newOrderRepo.findAll();
            return modelMapper.map(list, new TypeToken<List<NewOrderFullDTO>>(){}.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public NewOrderDTO addNewOrder(NewOrderDTO newOrderDTO) {
        try{
            NewOrder newOrder = modelMapper.map(newOrderDTO, NewOrder.class);
            NewOrder newOrder1 = newOrderRepo.save(newOrder);
            return modelMapper.map(newOrder1, new TypeToken<NewOrderDTO>(){}.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public boolean deleteNewOrder(int newOrderId) {
        try{
            NewOrder newOrder = newOrderRepo.getReferenceById(newOrderId);
            if(newOrder==null){
                return false;
            }else{
                newOrderRepo.deleteById(newOrderId);
                return true;
            }
        }
        catch(Exception e){
            System.out.println(e.toString());
            return false;
        }
    }

    @Override
    public NewOrderDTO updateNewOrder(NewOrderDTO newOrderDTO) {
        try{
            Designer designerDTO = designerRepo.getDesignerById(newOrderDTO.getDesignerId());
            if(designerDTO!=null){
                newOrderRepo.UpdateNewOrder(newOrderDTO.getProjectName(),newOrderDTO.getReqDescription(),newOrderDTO.getReqDraw(),newOrderDTO.getAttachments(),newOrderDTO.getReview(),newOrderDTO.getRate(),newOrderDTO.getNewOrderId());
                return getNewOrderById(newOrderDTO.getNewOrderId());
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
    public NewOrderDTO getNewOrderById(int newOrderId) {
        try{
            NewOrder newOrder = newOrderRepo.getReferenceById(newOrderId);
            if(newOrder!=null){
                return modelMapper.map(newOrder, new TypeToken<NewOrderDTO>(){}.getType());
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
