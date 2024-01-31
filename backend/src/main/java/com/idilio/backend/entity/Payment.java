package com.idilio.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Entity
@Table(name = "Payment")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="paymentId")
    private int paymentId;

    @Column(name="paidDate")
    private Timestamp paidDate;

    @Column(name="amount")
    private double amount;


    @JsonIgnore
    @OneToOne
    @JoinColumn(name="resourceOrderId",referencedColumnName = "resourceOrderId")
    private ResourceOrder resourceOrder;
}
