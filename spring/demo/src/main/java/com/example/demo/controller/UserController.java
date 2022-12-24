package com.example.demo.controller;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.param.UserParam;
import com.example.demo.service.AppUserService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@RestController
@AllArgsConstructor
@Slf4j
public class UserController {
    
    AppUserService userService;

    @RequestMapping(
        path = "/login" , 
        method = RequestMethod.POST, 
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public ResponseEntity<String> showLoginForm(UserParam param) {
        //test user
        userService.signupDummy();

        log.debug("LOGIN DEBUG = " + param.username());
        
        return ResponseEntity.ok("ok");
    }
    
    // @GetMapping("/logout")
    // public String showlogoutForm() {
    //     return "logout";
    // }
        
    // @RequestMapping("/logout")
    // public String logout(HttpServletRequest request, HttpServletResponse response) {
    //     Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    //     if (auth != null) {
    //         new SecurityContextLogoutHandler().logout(request, response, auth);
    //     }
    //     return "forward:/";
    // }

}
