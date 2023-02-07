package com.idilio.backend.serviceimpl;

import com.idilio.backend.dto.PackageDTO;
import com.idilio.backend.dto.ProgressDTO;
import com.idilio.backend.entity.Package;
import com.idilio.backend.entity.Progress;
import com.idilio.backend.repository.ProgressRepo;
import com.idilio.backend.service.ProgressService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class ProgressServiceImpl implements ProgressService {

    @Autowired
    private ProgressRepo progressRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<ProgressDTO> getAllProgress() {
        try{
            List<Progress> list = progressRepo.findAll();
            return modelMapper.map(list, new TypeToken<List<ProgressDTO>>(){}.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public ProgressDTO addProgress(ProgressDTO progressDTO) {
        try{
            Progress progress = progressRepo.getReferenceById(progressDTO.getProgressId());
            if(progress!=null){
                Progress progress1 = modelMapper.map(progressDTO,Progress.class);
                progress1 = progressRepo.save(progress1);

                return modelMapper.map(progress1,new TypeToken<ProgressDTO>(){}.getType());
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
    public ProgressDTO getProgressById(int progressId) {
        try{
            Progress progress = progressRepo.getReferenceById(progressId);
            if(progress!=null){
                return modelMapper.map(progress, new TypeToken<ProgressDTO>(){}.getType());
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
    public ProgressDTO updateProgress(ProgressDTO progressDTO) {
        try{
            Progress progress = progressRepo.getReferenceById(progressDTO.getProgressId());
            if(progress!=null){
                progressRepo.updateProgress(progressDTO.getStage(),progressDTO.getName(),progressDTO.getChangeTime(),progressDTO.getProgressId());
                return getProgressById(progressDTO.getProgressId());
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
