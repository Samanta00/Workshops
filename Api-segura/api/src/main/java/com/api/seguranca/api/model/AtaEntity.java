package com.api.seguranca.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import com.api.seguranca.api.model.ColaboradorEntity;
import com.api.seguranca.api.model.WorkshopEntity;


import java.util.List;

@Entity
@Table(name = "ata")
public class AtaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "workshop_id", nullable = false)
    private WorkshopEntity workshop;

    @ManyToMany
    @JoinTable(
        name = "ata_colaborador",
        joinColumns = @JoinColumn(name = "ata_id"),
        inverseJoinColumns = @JoinColumn(name = "colaborador_id")
    )
    private List<ColaboradorEntity> colaboradores;

    public AtaEntity() {
    }

    public AtaEntity(WorkshopEntity workshop, List<ColaboradorEntity> colaboradores) {
        this.workshop = workshop;
        this.colaboradores = colaboradores;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public WorkshopEntity getWorkshop() {
        return workshop;
    }

    public void setWorkshop(WorkshopEntity workshop) {
        this.workshop = workshop;
    }

    public List<ColaboradorEntity> getColaboradores() {
        return colaboradores;
    }

    public void setColaboradores(List<ColaboradorEntity> colaboradores) {
        this.colaboradores = colaboradores;
    }
}
