package com.idilio.backend.controller;

import com.idilio.backend.dto.DesignerDTO;
import com.idilio.backend.service.DesignerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("api/v1/designer")
public class DesignerController {

    @Autowired
    private DesignerService designerService;

    @GetMapping("/getalldesigners")
    public ResponseEntity<?> getAllDesigners(){
        Map<String, Object> map = new LinkedHashMap<>();
        List<DesignerDTO> designerList = designerService.getAllLDesigner();
        if(!designerList.isEmpty()){
            map.put("status",1);
            map.put("data",designerList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Designer List Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getdesignerbyid/{designerId}")
    public ResponseEntity<?> getDesignerById(@PathVariable int designerId){
        Map<String, Object> map = new LinkedHashMap<>();
        DesignerDTO designerDTO = designerService.getDesignerById(designerId);
        if(designerDTO != null){
            map.put("status",1);
            map.put("data",designerDTO);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Designer id Not Found");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/adddesigner")
    public ResponseEntity<?> addDesigner(@RequestBody DesignerDTO designerDTO){
        Map<String, Object> map = new LinkedHashMap<>();
        DesignerDTO designerDTO1 = designerService.addDesigner(designerDTO);
        if(designerDTO != null){
            map.put("status",1);
            map.put("data",designerDTO1);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Designer Not Added");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updatedesigner")
    public ResponseEntity<?> updateDesigner(@RequestBody DesignerDTO designerDTO){
        Map<String, Object> map = new LinkedHashMap<>();
        DesignerDTO designerDTO1 = designerService.updateDesigner(designerDTO);
        if(designerDTO != null){
            map.put("status",1);
            map.put("data",designerDTO1);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else{
            map.clear();
            map.put("status",0);
            map.put("message","Designer Not Updated");
            return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
        }
    }
}
