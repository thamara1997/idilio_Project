package com.idilio.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Login {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="login_id")
    private int loginId;
    @Column(name="email")
    private String email;
    @Column(name="password")
    private String password;

    @OneToOne(mappedBy = "login",cascade = CascadeType.MERGE)
    private User user;
}
