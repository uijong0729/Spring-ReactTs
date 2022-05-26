package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReactViewController {
    
    @RequestMapping("/home")
    public String index() {
        return "/index.html";
    }
}
