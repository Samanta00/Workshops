package com.api.seguranca.api.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.api.seguranca.api.Repository.RepositoryRegister;


@RestController
public class Router_registers {
    @Autowired
    private RepositoryRegister acao;

    @GetMapping("/register")
    public String menssagem(){    
        return "testeFuncionou";
    }
}
