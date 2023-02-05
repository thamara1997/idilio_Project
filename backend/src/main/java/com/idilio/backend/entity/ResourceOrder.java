package com.idilio.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

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

}
