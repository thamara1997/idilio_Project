package com.idilio.backend.serviceimpl;

import com.idilio.backend.dto.Payment2DTO;
import com.idilio.backend.entity.Payment2;
import com.idilio.backend.repository.Payment2Repo;
import com.idilio.backend.service.Payment2Service;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class Payment2ServiceImpl implements Payment2Service {

    @Autowired
    private Payment2Repo payment2Repo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<Payment2DTO> getAllPayments2() {
        try{
            List<Payment2> list = payment2Repo.findAll();
            return modelMapper.map(list, new TypeToken<List<Payment2DTO>>(){}.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public Payment2DTO addPayment2(Payment2DTO payment2DTO) {
        try{
            Payment2 payment = payment2Repo.getReferenceById(payment2DTO.getPayment2Id());
            if(payment!=null){
                Payment2 payment1 = modelMapper.map(payment2DTO,Payment2.class);
                payment1 = payment2Repo.save(payment1);

                return modelMapper.map(payment,new TypeToken<Payment2DTO>(){}.getType());
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
    public Payment2DTO getPayment2ById(int payment2Id) {
        try{
            Payment2 payment = payment2Repo.getReferenceById(payment2Id);
            if(payment!=null){
                return modelMapper.map(payment,new TypeToken<Payment2DTO>(){}.getType());
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
