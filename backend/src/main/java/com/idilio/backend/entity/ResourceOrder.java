package com.idilio.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name="ResourceOrder")
public class ResourceOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="resourceOrderId")
    private int resourceOrderId;

    @Column(name="projectName")
    private String projectName;

    @Column(name="reqDescription")
    private String reqDescription;

    @Column(name="reqDraw")
    private String reqDraw;

    @Column(name="attachments")
    private String attachments;

    @Column(name="rate")
    private int rate;

    @Column(name="review")
    private String review;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="resourceId",referencedColumnName = "resourceId")
    private Resources resources;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="progressId" , referencedColumnName = "progressId")
    private Progress progress;

    @JsonIgnore
    @OneToOne(mappedBy = "resourceOrder",cascade = CascadeType.MERGE)
    private Payment payment;

    @OneToMany(mappedBy = "resourceOrder", cascade = CascadeType.MERGE)
    private List<UsersOrders> usersOrders;

}
