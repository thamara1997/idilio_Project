package com.idilio.backend.service;

import com.idilio.backend.dto.DesignerDTO;
import com.idilio.backend.dto.UserDTO;
import com.idilio.backend.dto.UserFullDTO;

import java.util.List;

public interface DesignerService {
    List<DesignerDTO> getAllLDesigner();

    DesignerDTO addDesigner(DesignerDTO designerDTO);

    DesignerDTO getDesignerById(int designerId);

    DesignerDTO updateDesigner(DesignerDTO designerDTO);
}
