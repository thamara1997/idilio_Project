package com.idilio.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name="Designer")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Designer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="designerId")
    private int designerId;

    @Column(name="orderCount")
    private int orderCount;

    @Column(name="level")
    private int level;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name="userId",referencedColumnName = "userId")
    private User user;

    @OneToMany(mappedBy = "designer", cascade = CascadeType.REMOVE)
    private List<Resources> resources;

}
