package com.api.seguranca.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.api.seguranca.api.model.AtaEntity;

public interface AtaRepository extends JpaRepository<AtaEntity, Integer> {
}
