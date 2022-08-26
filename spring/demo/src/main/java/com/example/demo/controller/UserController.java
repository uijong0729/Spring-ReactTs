package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class UserController {
    
    @RequestMapping("/login")
    public String login(
        @RequestParam(value = "id", defaultValue = "") String id, 
        @RequestParam(value = "pass", defaultValue = "") String pass) {
        
        log.debug("id = {}, pass = {}", id, pass);

        return "forward:/";
    }
}
