package com.idilio.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "UsersOrders")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UsersOrders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "usersOrdersId")
    private int usersOrdersId;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="userId" , referencedColumnName = "userId")
    private User user;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="resourceOrderId" , referencedColumnName = "resourceOrderId")
    private ResourceOrder resourceOrder;
}
