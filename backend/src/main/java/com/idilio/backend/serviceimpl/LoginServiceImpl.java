package com.idilio.backend.serviceimpl;

import com.idilio.backend.common.Common;
import com.idilio.backend.dto.LoginDTO;
import com.idilio.backend.dto.UserFullDTO;
import com.idilio.backend.entity.Login;
import com.idilio.backend.repository.LoginRepo;
import com.idilio.backend.service.LoginService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.List;

@Service
public class LoginServiceImpl implements LoginService {
    @Autowired
    private LoginRepo loginrepo;
    @Autowired
    private ModelMapper modelMapper;
    private Common common = new Common();

    @Override
    public Boolean validateEmail(String email){
        boolean valid=false;
        try{
            Login login = loginrepo.validateEmail(email);
            if(login==null){
                valid=true;
            }
            else{
                valid=false;
            }
            return valid;
        }
        catch(Exception e){
            System.out.println(e.toString());
            return valid;
        }
    }

    @Override
    public LoginDTO addLogin(UserFullDTO userdata) throws NoSuchAlgorithmException {
        try{
            LoginDTO ldto = new LoginDTO(userdata.getEmail(),userdata.getPassword());
            String hashedPW = common.encryptPassword(ldto.getPassword());
            ldto.setPassword(hashedPW);
            Login l = loginrepo.save(modelMapper.map(ldto,Login.class));

            return modelMapper.map(l, new TypeToken<LoginDTO>(){}.getType());
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public LoginDTO updatePassword(LoginDTO logindata) throws NoSuchAlgorithmException {
        try{
            LoginDTO ldto = getLoginById(logindata.getLoginId());

            if(ldto != null){
                String hashedPW = common.encryptPassword(logindata.getPassword());
                loginrepo.updatePassword(hashedPW,logindata.getLoginId());
                return getLoginById(logindata.getLoginId());
            }
        }
        catch (Exception e){
            System.out.println(e.toString());
        }
        return null;
    }

    @Override
    public LoginDTO getLoginById(int loginid) {
        try{
            Login l = loginrepo.getLoginDetailsById(loginid);

            if(l==null){
                return null;
            }
            return modelMapper.map(l,new TypeToken<LoginDTO>(){}.getType());
        }
        catch (Exception e){
            System.out.println(e.toString());
        }
        return null;
    }

    @Override
    public List<LoginDTO> getAllLogin() {
        try{
            List<Login> list = loginrepo.findAll();
            return modelMapper.map(list, new TypeToken<List<LoginDTO>>(){}.getType());
//            return list;
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }


}
