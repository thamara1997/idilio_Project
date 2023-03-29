package com.idilio.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Entity
@Table(name = "Payment2")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Payment2 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="payment2Id")
    private int payment2Id;

    @Column(name="paidDate")
    private Timestamp paidDate;

    @Column(name="amount")
    private double amount;


    @JsonIgnore
    @OneToOne
    @JoinColumn(name="newOrderId",referencedColumnName = "newOrderId")
    private NewOrder newOrder;
}
