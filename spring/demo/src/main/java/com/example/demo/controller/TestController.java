package com.example.demo.controller;

import com.example.demo.Entity.TodoEntity;
import com.example.demo.Entity.TodoStatus;
import com.example.demo.Repository.TodoRepository;
import lombok.extern.slf4j.Slf4j;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;

@Slf4j
@RestController
public class TestController {
    
    @Autowired
    TodoRepository repo;
    
    @GetMapping("/ok")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("ok");
    }

    // curl -X POST http://localhost:8080/putTodo -H "Content-Type: application/json" -d "{ \"text\": \"johnny\" }"
    @PostMapping(value = "/putTodo", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<TodoEntity> putTodo(@RequestBody TodoEntity todo) {
        log.info("posted entity : {}", todo.toString());

        var result = repo.save(todo);
        log.info("inserted entity : {}", result.toString());

        return ResponseEntity.ok(result);
    }

    // http://localhost:8080/getTodo/1
    @GetMapping("/getTodo/{id}")
    public ResponseEntity<TodoEntity> getTodo(@PathVariable Long id) {
        Optional<TodoEntity> entity = repo.findById(id);
        TodoEntity result = null;

        if(entity.isPresent()){
            log.info("get entity : {}", entity.get().getId());
            result = entity.get();
        } else {
            result = new TodoEntity();
            result.setId(id);
            result.setStatus(TodoStatus.COMPLETED);
            result.setText("Completed");
            result.setAssignedUserId("worker");
            result.setRegistrantId("registrantId");
            result = repo.save(result);
            log.info("inserted entity : {}", result.getId());
        } 

        return ResponseEntity.ok(result);
    }

    // http://localhost:8080/getTodo
    @GetMapping("/getTodo")
    public ResponseEntity<Iterable<TodoEntity>> getTodos() {
        var result = repo.findAll();
        log.info("list : {}", result);
        return ResponseEntity.ok(result);
    }
}
