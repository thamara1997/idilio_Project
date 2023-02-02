package com.idilio.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "Resources")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Resources {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="resourceId")
    private int resourceId;

    @Column(name="title")
    private String title;

    @Column(name="description")
    private String description;

    @Column(name="amount")
    private double amount;

    @Column(name="category")
    private String category;

    @Column(name="searchTags")
    private String searchTags;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="designerId" , referencedColumnName = "designerId")
    private Designer designer;

    @OneToMany(mappedBy = "resources",cascade = CascadeType.REMOVE)
    private List<ResourceOrder> resourceOrders;

}
