package com.api.seguranca.api.Repository;

import org.springframework.data.repository.CrudRepository;

import com.api.seguranca.api.Model.Register;

public interface RepositoryRegister extends CrudRepository <Register, Integer>{
    
}
