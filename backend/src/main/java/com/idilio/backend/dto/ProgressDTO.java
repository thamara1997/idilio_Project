package com.idilio.backend.dto;

import lombok.*;

import java.sql.Timestamp;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class ProgressDTO {
    private int progressId;
    private int stage;
    private String name;
    private Timestamp changeTime;
}
