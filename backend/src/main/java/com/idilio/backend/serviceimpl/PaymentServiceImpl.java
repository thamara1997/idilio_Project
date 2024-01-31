package com.idilio.backend.serviceimpl;

import com.idilio.backend.dto.PackageDTO;
import com.idilio.backend.dto.PaymentDTO;
import com.idilio.backend.entity.Package;
import com.idilio.backend.entity.Payment;
import com.idilio.backend.repository.PaymentRepo;
import com.idilio.backend.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepo paymentRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<PaymentDTO> getAllPayments() {
        try{
            List<Payment> list = paymentRepo.findAll();
            return modelMapper.map(list, new TypeToken<List<PaymentDTO>>(){}.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public PaymentDTO addPayment(PaymentDTO paymentDTO) {
        try{
            Payment payment = paymentRepo.getReferenceById(paymentDTO.getPaymentId());
            if(payment!=null){
                Payment payment1 = modelMapper.map(paymentDTO,Payment.class);
                payment1 = paymentRepo.save(payment1);

                return modelMapper.map(payment1,new TypeToken<PaymentDTO>(){}.getType());
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
    public PaymentDTO getPaymentById(int paymentId) {
        try{
            Payment payment = paymentRepo.getReferenceById(paymentId);
            if(payment!=null){
                return modelMapper.map(payment,new TypeToken<PaymentDTO>(){}.getType());
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
