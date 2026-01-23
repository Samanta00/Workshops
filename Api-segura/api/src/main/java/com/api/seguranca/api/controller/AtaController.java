package com.api.seguranca.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.api.seguranca.api.repository.AtaRepository;
import com.api.seguranca.api.repository.WorkshopRepository;
import com.api.seguranca.api.repository.ColaboradorRepository;
import com.api.seguranca.api.model.AtaEntity;
import com.api.seguranca.api.model.ColaboradorEntity;
import com.api.seguranca.api.model.WorkshopEntity;


@RestController
@RequestMapping("/api/atas")
public class AtaController {

    @Autowired
    private AtaRepository ataRepository;

    @Autowired
    private WorkshopRepository workshopRepository;

    @Autowired
    private ColaboradorRepository colaboradorRepository;

    @PostMapping
    public AtaEntity criarAta(@RequestParam Integer workshopId) {
        WorkshopEntity workshop = workshopRepository.findById(workshopId)
                .orElseThrow(() -> new RuntimeException("Workshop não encontrado"));

        AtaEntity ata = new AtaEntity();
        ata.setWorkshop(workshop);

        return ataRepository.save(ata);
    }

    @PutMapping("/{ataId}/colaboradores/{colaboradorId}")
    public AtaEntity adicionarColaborador(
            @PathVariable Integer ataId,
            @PathVariable Integer colaboradorId) {

        AtaEntity ata = ataRepository.findById(ataId)
                .orElseThrow(() -> new RuntimeException("Ata não encontrada"));

        ColaboradorEntity colaborador = colaboradorRepository.findById(colaboradorId)
                .orElseThrow(() -> new RuntimeException("Colaborador não encontrado"));

        ata.getColaboradores().add(colaborador);

        return ataRepository.save(ata);
    }

    @DeleteMapping("/{ataId}/colaboradores/{colaboradorId}")
    public AtaEntity removerColaborador(
            @PathVariable Integer ataId,
            @PathVariable Integer colaboradorId) {

        AtaEntity ata = ataRepository.findById(ataId)
                .orElseThrow(() -> new RuntimeException("Ata não encontrada"));

        ata.getColaboradores()
           .removeIf(c -> c.getId() == colaboradorId);

        return ataRepository.save(ata);
    }
}
