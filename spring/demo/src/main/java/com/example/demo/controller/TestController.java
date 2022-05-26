package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/test")
public class TestController {
    
    @GetMapping("/ok")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("ok");
    }
}
