package com.example.demo.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class UserEntity {
    @Id @GeneratedValue
    private long uid;
    @Column(name = "id")
    private String id;
    @Column(name = "pass")
    private String pass;
    @Column(name = "groupId")
    private String groupId;

    public UserEntity() {

    }

    public UserEntity(String id, String pass) {
        this.id = id;
        this.pass = pass;
        this.groupId = ""; // 개인용 ToDo
    }

    @Override
    public String toString() {
        return this.id;
    }
}
