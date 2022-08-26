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

    // @RequestMapping("/error")
    // public String error(HttpServletRequest request) {
    //     Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
    //     if (status != null) {
    //         Integer statusCode = Integer.valueOf(status.toString());
    //         if (statusCode == HttpStatus.NOT_FOUND.value()) {
    //             return "forward:/";
    //         }
    //     }
    //     return "error";
    // }
}
