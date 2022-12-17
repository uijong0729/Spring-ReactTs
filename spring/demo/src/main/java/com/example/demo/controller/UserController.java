package com.example.demo.controller;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.service.AppUserService;

import org.springframework.security.core.context.SecurityContextHolder;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;

@Controller
@AllArgsConstructor
public class UserController {
    
    AppUserService userService;

    @GetMapping("/login")
    public String showLoginForm() {
        //test user
        userService.signupDummy();
        
        return "login";
    }
    
    @GetMapping("/logout")
    public String showlogoutForm() {
        return "logout";
    }
        
    @RequestMapping("/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return "forward:/";
    }

}
