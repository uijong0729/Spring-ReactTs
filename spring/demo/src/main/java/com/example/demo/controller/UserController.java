package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.UserEntity;
import com.example.demo.Repository.UserRepository;
import com.example.demo.param.UserParam;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class UserController {

    @Autowired
    UserRepository repo;

    @PostMapping(value = "/login", 
        consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserParam> login(@RequestBody UserParam param) {
        
        log.debug("id = {}, pass = {}", param.id(), param.pass());

        return ResponseEntity.ok(param);
    }

    @PostMapping(value = "/signup", 
    consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public ResponseEntity<UserEntity> signup(@RequestBody UserParam param) {
        log.debug("id = {}, pass = {}", param.id(), param.pass());
        var result = repo.save(new UserEntity(param.id(), param.pass()));
        log.debug("save : {}, {}, {}", result.getUid(), result.getId(), result.getPass());
        
        return ResponseEntity.ok(result);
    }
}
