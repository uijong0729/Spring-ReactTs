package com.example.demo.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.param.UserParam;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class UserController {

    @PostMapping(value = "/goLogin", 
        consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserParam> login(@RequestBody UserParam param) {
        
        log.debug("id = {}, pass = {}", param.id(), param.pass());

        return ResponseEntity.ok(param);
    }
}
