package com.idilio.backend.serviceimpl;

import com.idilio.backend.dto.NewOrderDTO;
import com.idilio.backend.dto.ResourcesDTO;
import com.idilio.backend.entity.NewOrder;
import com.idilio.backend.entity.Resources;
import com.idilio.backend.repository.DesignerRepo;
import com.idilio.backend.repository.NewOrderRepo;
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

    @Override
    public List<NewOrderDTO> getAllNewOrders() {
        try{
            List<NewOrder> list = newOrderRepo.findAll();
            return modelMapper.map(list, new TypeToken<List<NewOrderDTO>>(){}.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }
}
