package com.idilio.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ResourcesDTO {
    private int resourceId;
    private String title;
    private String description;
    private double amount;
    private String category;
    private String searchTags;
    private int designerId;
}
