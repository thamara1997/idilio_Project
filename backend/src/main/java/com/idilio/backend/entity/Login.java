package com.idilio.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="Login")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Login {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="loginId")
    private int loginId;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @OneToOne(mappedBy = "login")
    private User user;

}
