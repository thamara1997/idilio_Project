package com.idilio.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name="NewOrder")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NewOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="newOrderId")
    private int newOrderId;

    @Column(name="projectName")
    private String projectName;

    @Column(name="reqDescription")
    private String reqDescription;

    @Column(name="reqDraw")
    private String reqDraw;

    @Column(name="attachments")
    private String attachments;

    @Column(name="review")
    private String review;

    @Column(name="rate")
    private int rate;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="designerId" , referencedColumnName = "designerId")
    private Designer designer;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="packageId" , referencedColumnName = "packageId")
    private Package aPackage;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="userId" , referencedColumnName = "userID")
    private User user;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="progressId" , referencedColumnName = "progressId")
    private Progress progress;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name="paymentId",referencedColumnName = "paymentId")
    private Payment payment;



}
