package com.example.demo.service;

import java.util.Collection;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

public class AppUserDetail extends User {

    public AppUserDetail(String username, String password, Collection<? extends GrantedAuthority> auth) {
        super(username, password, auth);
    }
}
