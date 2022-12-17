package com.example.demo.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class ReactViewController {

    @RequestMapping("/")
    public String index() {
        return "index.html";
    }

    @RequestMapping("/home")
    public String home() {
        return "forward:/";
    }

    @RequestMapping("/todo")
    public String todo() {
        return "forward:/";
    }
}
