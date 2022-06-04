package com.example.demo.controller;

import com.example.demo.Entity.TodoEntity;
import com.example.demo.Entity.TodoStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    
    @GetMapping("/ok")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("ok");
    }

    @GetMapping("/putTodo")
    public ResponseEntity<TodoEntity> putTodo(@RequestBody TodoEntity todo) {
        return ResponseEntity.ok(todo);
    }

    @GetMapping("/getTodo")
    public ResponseEntity<TodoEntity> getTodo() {
        TodoEntity entity = new TodoEntity();
        entity.setId(0L);
        entity.setStatus(TodoStatus.COMPLETED);
        entity.setText("Completed");

        return ResponseEntity.ok(entity);
    }
}
