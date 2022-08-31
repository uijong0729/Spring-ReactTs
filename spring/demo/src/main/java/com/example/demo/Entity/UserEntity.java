package com.example.demo.Entity;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class UserEntity {
    @Id @GeneratedValue
    private long uid;
    private String id;
    private String pass;

    public UserEntity() {

    }

    public UserEntity(String id, String pass) {
        this.id = id;
        this.pass = pass;
    }

    @Override
    public String toString() {
        return this.id;
    }
}
