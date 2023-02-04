package com.idilio.backend.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class ResourcesDTO {
    private int resourceId;
    private String title;
    private String description;
    private double amount;
    private String category;
    private String searchTags;
    private int designerId;
}
