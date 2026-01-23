package com.api.seguranca.api.controller;

import com.api.seguranca.api.repository.WorkshopRepository;
import com.api.seguranca.api.model.WorkshopEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/workshops")
public class WorkshopController {

    @Autowired
    private WorkshopRepository workshopRepository;

    @PostMapping
    public WorkshopEntity criarWorkshop(@RequestBody WorkshopEntity workshop) {
        return workshopRepository.save(workshop);
    }
}
