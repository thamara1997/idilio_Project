package com.idilio.backend.auth;

import com.idilio.backend.config.JwtService;
import com.idilio.backend.dto.UserDTO;
import com.idilio.backend.dto.UserFullDTO;
import com.idilio.backend.entity.Login;
import com.idilio.backend.repository.LoginRepo;
import com.idilio.backend.service.UserService;
import com.idilio.backend.serviceimpl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    @Autowired
    private final LoginRepo loginRepo;
    @Autowired
    private final PasswordEncoder passwordEncoder;
    @Autowired
    private final JwtService jwtService;
    @Autowired
    private final AuthenticationManager authenticationManager;
    @Autowired
    private final UserServiceImpl userServiceImpl;
    @Autowired
    private ModelMapper modelMapper;

    public AuthenticationResponse register(UserFullDTO userdata) throws NoSuchAlgorithmException {
        UserDTO userDTO = userServiceImpl.addUser(userdata);
        if(userDTO !=null){
            var user = modelMapper.map(userdata, Login.class);

            var jwtToken = jwtService.generateToken(user);
            //System.out.println(jwtToken);
            return  AuthenticationResponse.builder()
                    .token(jwtToken)
                    .user(userDTO)
                    .build();
        }
        return null;

    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        try{

            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );

            var user = loginRepo.findByEmail(request.getEmail())
                    .orElseThrow();

            var jwtToken = jwtService.generateToken(user);
            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .user(modelMapper.map(user.getUser(), new TypeToken<UserDTO>() {}.getType()))
                    .build();
        }catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }
}
