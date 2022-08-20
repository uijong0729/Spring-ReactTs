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
    private Long id;
    
    private String text;
    
    private TodoStatus status = TodoStatus.IMCOMPLETED;

    private String assignedUserId;

    private String registrantId;

    @Override
    public String toString() {
        return String.format(
            "id : %d, text: %s, status: %s, assignedUserId: %s, registrantId: %s", 
            id, text, status.toString(), assignedUserId, registrantId);
    }
}
