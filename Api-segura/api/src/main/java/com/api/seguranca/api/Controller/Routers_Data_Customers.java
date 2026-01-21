package com.api.seguranca.api.Controller;

import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.Generated;

import org.apache.catalina.startup.ClassLoaderFactory.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.api.seguranca.api.Model.BaseEntity;
import com.api.seguranca.api.Model.DataCustomer;
import com.api.seguranca.api.Repository.RespositoryCustomer;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;




@RestController
public class Routers_Data_Customers {

    @Autowired
    private RespositoryCustomer acao;

    @PostMapping("/cadastro")
    public String postMethodName(@RequestBody DataCustomer dataCustomer) {
        DataCustomer savedCustomer = acao.save(dataCustomer);
        return "Customer saved with ID: " + savedCustomer.getId();
    }

    @GetMapping("/view")
    public List<DataCustomer> selecionar(){
        return acao.findAll();
  
    }
    
    @GetMapping("")
    public String menssagem(){    
        return "testeFuncionou";
    }
    
}
