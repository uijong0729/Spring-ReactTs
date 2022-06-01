package com.example.demo.controller;

import com.example.demo.Bean.Todo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/test")
public class TestController {
    
    @GetMapping("/ok")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("ok");
    }

    @GetMapping("/putTodo")
    public ResponseEntity<Todo> putTodo(@RequestBody Todo todo) {
        return ResponseEntity.ok(todo);
    }
}
