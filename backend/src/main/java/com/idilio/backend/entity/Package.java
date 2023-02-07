package com.idilio.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "Package")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Package {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="packageId")
    private int packageId;

    @Column(name="name")
    private String name;

    @Column(name="category")
    private String category;

    @Column(name="amount")
    private double amount;

    @OneToMany(mappedBy = "aPackage", cascade = CascadeType.MERGE)
    private List<NewOrder> newOrders;
}
