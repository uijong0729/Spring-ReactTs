package com.example.demo.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// import org.springframework.security.core.Authentication;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;

@Slf4j
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

    @RequestMapping("/login")
    public String login() {
        return "forward:/";
    }

    // @PostMapping(value = "/logout_page")
    // public String logout(HttpServletRequest request, HttpServletResponse response) {
    //     log.debug("logout");
    //     Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    //     if (auth != null) {
    //         new SecurityContextLogoutHandler().logout(request, response, auth);
    //     }
    //     return "forward:/";
    // }
    
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
