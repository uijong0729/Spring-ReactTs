package com.example.demo.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class TodoEntity {
    
    @Id @GeneratedValue
    Long id;
    
    String text;
    
    Status status;
}
