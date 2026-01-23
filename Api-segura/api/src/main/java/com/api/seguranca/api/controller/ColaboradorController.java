package com.api.seguranca.api.controller;

import com.api.seguranca.api.repository.ColaboradorRepository;
import com.api.seguranca.api.model.ColaboradorEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/colaboradores")
public class ColaboradorController {

    @Autowired
    private ColaboradorRepository colaboradorRepository;

    @PostMapping
    public ColaboradorEntity criarColaborador(@RequestBody ColaboradorEntity colaborador) {
        return colaboradorRepository.save(colaborador);
    }
}
