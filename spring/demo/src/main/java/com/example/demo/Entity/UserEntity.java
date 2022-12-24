package com.example.demo.Entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class UserEntity {
    @Id @GeneratedValue
    private long uid;
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;
    @Column(name = "groupId")
    private String groupId;

    public UserEntity() {

    }

    public UserEntity(String id, String pass) {
        this.username = id;
        this.password = pass;
        this.groupId = ""; // 개인용 ToDo
    }

    public UserEntity(String id, String pass, String groupId) {
        this.username = id;
        this.password = pass;
        this.groupId = groupId; // 개인용 ToDo
    }

    @Override
    public String toString() {
        return this.username;
    }
}
