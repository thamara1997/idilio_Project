package com.idilio.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "Progress")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Progress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "progressId")
    private int progressId;

    @Column(name="stage")
    private int stage;

    @Column(name="name")
    private String name;

    @Column(name="changeTime")
    private Timestamp changeTime;

    @OneToMany(mappedBy = "progress", cascade = CascadeType.MERGE)
    private List<NewOrder> newOrders;

    @OneToMany(mappedBy = "progress", cascade = CascadeType.MERGE)
    private List<ResourceOrder> resourceOrders;
}
