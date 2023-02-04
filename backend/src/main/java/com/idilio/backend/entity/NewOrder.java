package com.idilio.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

}
