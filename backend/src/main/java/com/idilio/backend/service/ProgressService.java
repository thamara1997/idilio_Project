package com.idilio.backend.service;

import com.idilio.backend.dto.ProgressDTO;

import java.util.List;

public interface ProgressService {
    List<ProgressDTO> getAllProgress();

    ProgressDTO addProgress(ProgressDTO progressDTO);

    ProgressDTO getProgressById(int progressId);

    ProgressDTO updateProgress(ProgressDTO progressDTO);
}
