package com.idilio.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="ResourceOrder")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
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

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="resourceId",referencedColumnName = "resourceId")
    private Resources resources;

}
