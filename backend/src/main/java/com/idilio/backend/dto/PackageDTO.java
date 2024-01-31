package com.idilio.backend.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class PackageDTO {
    private int packageId;
    private String name;
    private String category;
    private double amount;

}
