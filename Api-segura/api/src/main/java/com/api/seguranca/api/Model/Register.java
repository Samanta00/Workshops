package com.api.seguranca.api.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="register")
public class Register extends BaseEntity{
    private String password;
    private String cellphone;
    private long id_registe;
    
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getCellphone() {
        return cellphone;
    }
    public void setCellphone(String cellphone) {
        this.cellphone = cellphone;
    }
    public long getId_registe() {
        return id_registe;
    }
    public void setId_registe(long id_registe) {
        this.id_registe = id_registe;
    }

  

    
}
