package com.idilio.backend.serviceimpl;

import com.idilio.backend.dto.DesignerDTO;
import com.idilio.backend.dto.UserDTO;
import com.idilio.backend.entity.Designer;
import com.idilio.backend.repository.DesignerRepo;
import com.idilio.backend.service.DesignerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DesignerServiceImpl implements DesignerService {

    @Autowired
    private DesignerRepo designerRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private UserServiceImpl userServiceImpl;

    @Override
    public List<DesignerDTO> getAllLDesigner() {
        try{
            List<Designer> list = designerRepo.findAll();
            return modelMapper.map(list, new TypeToken<List<DesignerDTO>>(){}.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public DesignerDTO addDesigner(DesignerDTO designerDTO) {
        try{
            UserDTO validuser = userServiceImpl.getUserById(designerDTO.getUserId());

            if(validuser!=null){
                Designer designer = modelMapper.map(designerDTO,Designer.class);
                designer = designerRepo.save(designer);
                return modelMapper.map(designer,new TypeToken<DesignerDTO>(){}.getType());
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
    public DesignerDTO getDesignerById(int designerId) {
        try{
            Designer designer = designerRepo.getDesignerById(designerId);
            if(designer!=null){
                return modelMapper.map(designer, new TypeToken<DesignerDTO>(){}.getType());
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
    public DesignerDTO updateDesigner(DesignerDTO designerDTO) {
        try{
            UserDTO validuser = userServiceImpl.getUserById(designerDTO.getUserId());
            if(validuser!=null){
                designerRepo.updateDesigner(designerDTO.getOrderCount(),designerDTO.getLevel(),designerDTO.getFbURL(),designerDTO.getInstaURL(),designerDTO.getLinkedinURL(),designerDTO.getCv(),designerDTO.isApproved(),designerDTO.getDesignerId());
                return getDesignerById(designerDTO.getDesignerId());
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
