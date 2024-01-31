package com.idilio.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Data
@Builder
@Table(name="User")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="userId")
    private int userId;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "country")
    private String country;

    @Column(name = "lastLogin")
    private Timestamp lastLogIn;

    @Column(name = "profile")
    private String profile;

    @Enumerated(EnumType.STRING)
    @Column(name="role")
    private Role role;


    @OneToOne(mappedBy = "user",cascade = CascadeType.REMOVE)
    private Login login;

    @OneToMany(mappedBy = "user", cascade = CascadeType.MERGE)
    private List<NewOrder> newOrders;

    @OneToOne(mappedBy = "user",cascade = CascadeType.MERGE)
    private Designer designer;

    @OneToMany(mappedBy = "user", cascade = CascadeType.MERGE)
    private List<UsersOrders> usersOrders;


}
