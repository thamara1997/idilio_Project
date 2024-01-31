package com.idilio.backend.config;

import jakarta.servlet.Filter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {
    @Autowired
    private final JwtAuthenticationFilter jwtAuthFilter;
    @Autowired
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)throws Exception{

        http.cors().and()
                .csrf()
                .disable()
                .authorizeHttpRequests()
                .requestMatchers("/api/v1/designer/get/**",
                        "/api/v1/login/get/**",
                        "/api/v1/neworder/get/**",
                        "/api/v1/package/get/**",
                        "/api/v1/payment2/get/**",
                        "/api/v1/payment/get/**",
                        "/api/v1/progress/get/**",
                        "/api/v1/resources/get/**",
                        "/api/v1/resourceorder/get/**",
                        "/api/v1/user/get/**",
                        "/api/v1/usersorders/get/**",
                        "/api/v1/upload/profilePic/**",
                        "/api/v1/upload/resourceArt/**",
                        "/api/v1/upload/resourceorderdrawing/**",
                        "/api/v1/upload/resourceorderwork/**",
                        "/api/v1/upload/neworderdrawing/**",
                        "/api/v1/upload/neworderwork/**",
                        "/api/v1/upload/neworderfiles/**",
                        "/api/v1/upload/resourceorderfiles/**",
                        "/api/v1/upload/neworderfile/**",
                        "/api/v1/upload/resourceorderfile/**",
                        "/api/v1/auth/register/**",
                        "/api/v1/auth/authenticate/**")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);


        return http.build();
    }
}
