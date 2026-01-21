package com.api.seguranca.api.Repository;

import org.springframework.data.repository.CrudRepository;

import com.api.seguranca.api.Model.DataCustomer;
import java.util.List;


public interface RespositoryCustomer extends CrudRepository <DataCustomer, Integer>{
    List<DataCustomer>findAll();

}
