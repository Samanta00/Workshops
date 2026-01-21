package com.api.seguranca.api.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name="user_information")
public class DataCustomer extends BaseEntity{
    private String password;
    private String cellphone;
    private long id_dataCustomer;
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
    public long getId_dataCustomer() {
        return id_dataCustomer;
    }
    public void setId_dataCustomer(long id_dataCustomer) {
        this.id_dataCustomer = id_dataCustomer;
    }

}
