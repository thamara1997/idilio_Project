package com.idilio.backend.serviceimpl;

import com.idilio.backend.dto.ResourcesDTO;
import com.idilio.backend.dto.UsersOrdersDTO;
import com.idilio.backend.entity.Resources;
import com.idilio.backend.entity.UsersOrders;
import com.idilio.backend.repository.UsersOrdersRepo;
import com.idilio.backend.service.UsersOrdersService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UsersOrdersServiceImpl implements UsersOrdersService {

    @Autowired
    private UsersOrdersRepo usersOrdersRepo;

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public List<UsersOrdersDTO> getAllUsersOrders() {
        try{
            List<UsersOrders> list = usersOrdersRepo.findAll();
            return modelMapper.map(list, new TypeToken<List<UsersOrdersDTO>>(){}.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public UsersOrdersDTO addUsersOrders(UsersOrdersDTO usersOrdersDTO) {
        try{
            UsersOrders usersOrders = modelMapper.map(usersOrdersDTO , UsersOrders.class);
            UsersOrders usersOrders1 = usersOrdersRepo.save(usersOrders);
            return modelMapper.map(usersOrders1, new TypeToken<UsersOrdersDTO>(){}.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public boolean deleteUsersOrders(int usersOrdersId) {
        try{
            UsersOrders usersOrders = usersOrdersRepo.getReferenceById(usersOrdersId);
            if(usersOrders==null){
                return false;
            }else{
                usersOrdersRepo.deleteById(usersOrdersId);
                return true;
            }
        }
        catch(Exception e){
            System.out.println(e.toString());
            return false;
        }
    }

    @Override
    public UsersOrdersDTO getUsersOrdersById(int usersOrdersId) {
        try{
            UsersOrders usersOrders = usersOrdersRepo.getReferenceById(usersOrdersId);
            if(usersOrders!=null){
                return modelMapper.map(usersOrders, new TypeToken<UsersOrdersDTO>(){}.getType());
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
    public List<UsersOrdersDTO> getOrdersByUserId(int userId) {
        try{
            List<UsersOrders> list = usersOrdersRepo.getOrdersByUserId(userId);
            return modelMapper.map(list,new TypeToken<List<UsersOrdersDTO>>(){}.getType());
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public UsersOrdersDTO getUsersOrdersByResourceOrderId(int resourceOrderId) {
        try{
            UsersOrders usersOrders = usersOrdersRepo.getUserByResourceOrderId(resourceOrderId);
            return modelMapper.map(usersOrders,new TypeToken<UsersOrdersDTO>(){}.getType());
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public boolean deleteUsersOrdersByResourceOrderId(int resourceOrderId) {
        try{
            UsersOrders usersOrders = usersOrdersRepo.getUserByResourceOrderId(resourceOrderId);
            if(usersOrders==null){
                return false;
            }else{
                usersOrdersRepo.deleteById(usersOrders.getUsersOrdersId());
                return true;
            }
        }
        catch(Exception e){
            System.out.println(e.toString());
            return false;
        }
    }
}
