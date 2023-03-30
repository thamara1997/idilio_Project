package com.idilio.backend.serviceimpl;

import com.idilio.backend.dto.NewOrderDTO;
import com.idilio.backend.dto.NewOrderFullDTO;
import com.idilio.backend.dto.ResourcesDTO;
import com.idilio.backend.entity.*;
import com.idilio.backend.entity.Package;
import com.idilio.backend.repository.*;
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

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ProgressRepo progressRepo;

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

//    @Override
//    public NewOrderDTO addNewOrder(NewOrderDTO newOrderDTO) {
//        try{
//            NewOrder newOrder = modelMapper.map(newOrderDTO, NewOrder.class);
//            NewOrder newOrder1 = newOrderRepo.save(newOrder);
//            return modelMapper.map(newOrder1, new TypeToken<NewOrderDTO>(){}.getType());
//        }
//        catch(Exception e){
//            System.out.println(e.toString());
//            return null;
//        }
//    }

    @Override
    public NewOrderDTO addNewOrder(NewOrderDTO newOrderDTO) {
        try{
            NewOrder newOrder = modelMapper.map(newOrderDTO, NewOrder.class);
            Package mypackage = packageRepo.getReferenceById(newOrderDTO.getPackageId());
            newOrder.setMyPackage(mypackage);
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

//    @Override
//    public NewOrderDTO updateNewOrder(NewOrderDTO newOrderDTO) {
//        try{
//            Designer designerDTO = designerRepo.getDesignerById(newOrderDTO.getDesignerId());
//            if(designerDTO!=null){
//                newOrderRepo.UpdateNewOrder(newOrderDTO.getProjectName(),newOrderDTO.getReqDescription(),newOrderDTO.getReqDraw(),newOrderDTO.getAttachments(),newOrderDTO.getReview(),newOrderDTO.getRate(),newOrderDTO.getNewOrderId());
//                return getNewOrderById(newOrderDTO.getNewOrderId());
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
    public NewOrderDTO updateNewOrder(NewOrderDTO newOrderDTO) {
        try{
            // Retrieve the existing NewOrder entity from the database
            NewOrder existingNewOrder = newOrderRepo.findById(newOrderDTO.getNewOrderId()).orElse(null);

            // Update the fields of the NewOrder entity using the values from the DTO
            if (existingNewOrder != null) {
                existingNewOrder.setProjectName(newOrderDTO.getProjectName());
                existingNewOrder.setReqDescription(newOrderDTO.getReqDescription());
                existingNewOrder.setReqDraw(newOrderDTO.getReqDraw());
                existingNewOrder.setAttachments(newOrderDTO.getAttachments());
                existingNewOrder.setReview(newOrderDTO.getReview());
                existingNewOrder.setRate(newOrderDTO.getRate());

                // Update the Designer mapping
                Designer designer = designerRepo.findById(newOrderDTO.getDesignerId()).orElse(null);
                if (designer != null) {
                    existingNewOrder.setDesigner(designer);
                } else {
                    // Handle the case where the Designer entity with the given ID does not exist
                    throw new IllegalArgumentException("Designer with ID " + newOrderDTO.getDesignerId() + " does not exist.");
                }

                // Update the Package mapping
                Package myPackage = packageRepo.findById(newOrderDTO.getPackageId()).orElse(null);
                if (myPackage != null) {
                    existingNewOrder.setMyPackage(myPackage);
                } else {
                    // Handle the case where the Package entity with the given ID does not exist
                    throw new IllegalArgumentException("Package with ID " + newOrderDTO.getPackageId() + " does not exist.");
                }

                // Update the User mapping
                User user = userRepo.findById(newOrderDTO.getUserId()).orElse(null);
                if (user != null) {
                    existingNewOrder.setUser(user);
                } else {
                    // Handle the case where the User entity with the given ID does not exist
                    throw new IllegalArgumentException("User with ID " + newOrderDTO.getUserId() + " does not exist.");
                }

                // Update the Progress mapping
                Progress progress = progressRepo.findById(newOrderDTO.getProgressId()).orElse(null);
                if (progress != null) {
                    existingNewOrder.setProgress(progress);
                } else {
                    // Handle the case where the Progress entity with the given ID does not exist
                    throw new IllegalArgumentException("Progress with ID " + newOrderDTO.getProgressId() + " does not exist.");
                }

                // Save the updated NewOrder entity to the database
                newOrderRepo.save(existingNewOrder);

                // Return the updated NewOrderDTO
                return getNewOrderById(newOrderDTO.getNewOrderId());
            } else {
                return null;
            }
        } catch(Exception e) {
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
