package com.idilio.backend.serviceimpl;

import com.idilio.backend.dto.DesignerDTO;
import com.idilio.backend.dto.PackageDTO;
import com.idilio.backend.dto.UserDTO;
import com.idilio.backend.entity.Designer;
import com.idilio.backend.entity.Package;
import com.idilio.backend.repository.PackageRepo;
import com.idilio.backend.service.PackageService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PackageServiceImpl implements PackageService {
    @Autowired
    private PackageRepo packageRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<PackageDTO> getAllPackages() {
        try{
            List<Package> list = packageRepo.findAll();
            return modelMapper.map(list, new TypeToken<List<PackageDTO>>(){}.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public PackageDTO addPackage(PackageDTO packageDTO) {
        try{
            Package apackage = packageRepo.getReferenceById(packageDTO.getPackageId());
            if(apackage!=null){
                Package apackge2 = modelMapper.map(packageDTO,Package.class);
                apackge2 = packageRepo.save(apackge2);

                return modelMapper.map(apackage,new TypeToken<PackageDTO>(){}.getType());
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
    public PackageDTO getPackageById(int packageId) {
        try{
            Package apackage = packageRepo.getReferenceById(packageId);
            if(apackage!=null){
                return modelMapper.map(apackage, new TypeToken<PackageDTO>(){}.getType());
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
    public PackageDTO updatePackage(PackageDTO packageDTO) {
        try{
            Package apackage = packageRepo.getReferenceById(packageDTO.getPackageId());
            if(apackage!=null){
                packageRepo.updatePackage(packageDTO.getName(),packageDTO.getCategory(),packageDTO.getAmount(),packageDTO.getPackageId());
                return getPackageById(packageDTO.getPackageId());
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
