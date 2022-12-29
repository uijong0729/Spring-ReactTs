package com.example.demo.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import java.util.Date;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class TodoEntity extends AuthEntity{
    
    @Id @GeneratedValue
    private Long id;
    
    @Column(name = "text")
    private String text;
    
    @Column(name = "status")
    private TodoStatus status = TodoStatus.IMCOMPLETED;

    @Column(name = "deadline", columnDefinition = "DATE")
    private Date deadline;

    @Column(name = "assignedUserId")
    private String assignedUserId;

    @Column(name = "registrantId")
    private String registrantId;

    @Override
    public String toString() {
        return String.format(
            "id : %d, deadline: %s, text: %s, status: %s, assignedUserId: %s, registrantId: %s", 
            id, text, deadline, status.toString(), assignedUserId, registrantId);
    }
}
