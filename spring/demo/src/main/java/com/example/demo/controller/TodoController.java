package com.example.demo.controller;

import com.example.demo.Entity.TodoEntity;
import com.example.demo.Entity.TodoStatus;
import com.example.demo.Repository.TodoRepository;
import com.example.demo.service.TodoService;

import lombok.extern.slf4j.Slf4j;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;

@Slf4j
@RestController
public class TodoController {
    
    TodoService service;

    @Autowired
    public TodoController(TodoService service) {
        this.service = service;
    }
    
    // curl -X POST http://localhost:8080/putTodo -H "Content-Type: application/json" -d "{ \"text\": \"johnny\" }"
    @PostMapping(value = "/putTodo", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<TodoEntity> putTodo(@RequestBody TodoEntity todo) {
        log.info("posted entity : {}", todo.toString());
        var result = service.putTodo(todo);
        return ResponseEntity.ok(result);
    }

    // http://localhost:8080/getTodo/1
    @GetMapping("/getTodo/{id}")
    public ResponseEntity<TodoEntity> getTodo(@PathVariable Long id) {
        var result = service.getTodo(id);
        return ResponseEntity.ok(result);
    }

    // http://localhost:8080/getTodo
    @GetMapping("/getTodo")
    public ResponseEntity<Iterable<TodoEntity>> getTodos() {
        var result = service.getTodos();
        log.info("list : {}", result);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/deleteTodo/{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable Long id) {
        service.deleteTodo(id);
        return ResponseEntity.ok("deleted");
    }

    @GetMapping("/completeTodo/{id}")
    public ResponseEntity<String> completeTodo(@PathVariable Long id) {
        service.updateTodo(id, TodoStatus.COMPLETED);
        return ResponseEntity.ok("updated");     
    }
}
