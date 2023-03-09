package com.idilio.backend.serviceimpl;

import com.idilio.backend.dto.LoginDTO;
import com.idilio.backend.dto.UserDTO;
import com.idilio.backend.dto.UserFullDTO;
import com.idilio.backend.entity.Login;
import com.idilio.backend.entity.Role;
import com.idilio.backend.entity.User;
import com.idilio.backend.repository.UserRepo;
import com.idilio.backend.service.UserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.List;


@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private LoginServiceImpl loginServiceImpl;

    @Override
    public List<UserDTO> getAllUsers(){
        try{
            List<User> userList = userRepo.findAll();
            return modelMapper.map(userList,
                    new TypeToken<List<UserDTO>>() {}.getType());
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public UserDTO addUser(UserFullDTO userdata) throws NoSuchAlgorithmException {
        try{
            boolean valid = loginServiceImpl.validateEmail(userdata.getEmail());

            if(valid){
                //LoginDTO ldto = loginServiceImpl.addLogin(userdata);
                //Login l = modelMapper.map(ldto, Login.class);

                User u = new User();
                u.setFirstName(userdata.getFirstName());
                u.setLastName(userdata.getLastName());
                u.setCountry(userdata.getCountry());
                u.setProfile(userdata.getProfile());
                u.setRole(Role.USER);

                //u.setLogin(l);
                User us = userRepo.save(u);

                LoginDTO ldto = loginServiceImpl.addLogin(userdata, us);

                return modelMapper.map(us, new TypeToken<UserDTO>(){}.getType());
            }else{
                return null;
            }


        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public UserDTO getUserById(int userid) {
        try{
            User user = userRepo.getUserById(userid);

            if(user==null){
                return null;
            }
            return modelMapper.map(user, new TypeToken<UserDTO>(){}.getType());
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public UserDTO updateUser(UserFullDTO userdata) {
        try{
           UserDTO validUser = getUserById(userdata.getUserId());

           if(validUser != null){
               userRepo.updateUser(userdata.getFirstName(),userdata.getLastName(),userdata.getCountry(),userdata.getProfile(),userdata.getUserId());
               return getUserById(userdata.getUserId());

           }
           else{
               return null;
           }
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public boolean deleteUser(int userId) {
        boolean deleted=false;
        try{
            UserDTO user=getUserById(userId);
            if(user != null){
                userRepo.deleteById(user.getUserId());
                deleted=true;
            }
            return deleted;
        }
        catch (Exception e){
            System.out.println(e.toString());
            return false;
        }
    }
}
