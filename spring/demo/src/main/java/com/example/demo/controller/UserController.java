package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.UserEntity;
import com.example.demo.param.UserParam;
import com.example.demo.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class UserController {

    UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping(value = "/login", 
        consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserParam> login(@RequestBody UserParam param) {
        log.debug("id = {}, pass = {}", param.id(), param.pass());
        var result = service.login(param);
        if (result != null) {
            log.debug("login = {}", result.toString());
        } else {
            log.debug("login = {}", "null");
        }
        
        return ResponseEntity.ok(param);
    }

    @PostMapping(value = "/signup", 
    consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserEntity> signup(@RequestBody UserParam param) {
        log.debug("id = {}, pass = {}", param.id(), param.pass());
        var result = service.signup(param);
        log.debug("save : {}, {}, {}", result.getUid(), result.getUserId(), result.getUserPass());
        return ResponseEntity.ok(result);
    }


}
