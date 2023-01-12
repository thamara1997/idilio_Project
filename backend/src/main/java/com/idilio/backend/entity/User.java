package com.idilio.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="user_id")
    private int userId;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "country")
    private String country;
    @Column(name = "is_admin")
    private String isAdmin;
    @Column(name = "last_login")
    private Timestamp lastLogIn;

    //Login login_id
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "login_id",referencedColumnName = "login_id")
    @JsonIgnoreProperties("user")
    private Login login;
}
