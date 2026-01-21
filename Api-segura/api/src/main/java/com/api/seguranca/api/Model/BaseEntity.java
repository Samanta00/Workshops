package com.api.seguranca.api.Model;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import java.io.Serializable;

@MappedSuperclass
public class BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String email;
    private String cpf;
    private String completName;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    private String getEmail() {
        return email;
    }
    private void setEmail(String email) {
        this.email = email;
    }
    private String getCpf() {
        return cpf;
    }
    private void setCpf(String cpf) {
        this.cpf = cpf;
    }
    private String getCompletName() {
        return completName;
    }
    private void setCompletName(String completName) {
        this.completName = completName;
    }

}
