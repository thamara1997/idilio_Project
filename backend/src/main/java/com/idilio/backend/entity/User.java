package com.idilio.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Entity
@Table(name="User")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="userId")
    private int userId;
    @Column(name = "firstName")
    private String firstName;
    @Column(name = "lastName")
    private String lastName;
    @Column(name = "country")
    private String country;
    @Column(name = "fbURL")
    private String fbURL;
    @Column(name = "instaURL")
    private String instaURL;
    @Column(name = "linkedinURL")
    private String linkedinURL;
    @Column(name = "isAdmin")
    private String isAdmin;
    @Column(name = "lastLogin")
    private Timestamp lastLogIn;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "loginId",referencedColumnName = "loginId")
    private Login login;

}
