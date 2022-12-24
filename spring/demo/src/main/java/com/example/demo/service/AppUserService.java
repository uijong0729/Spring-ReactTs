package com.example.demo.service;

import java.util.Collections;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import com.example.demo.Entity.UserEntity;
import com.example.demo.Repository.UserRepository;
import com.example.demo.param.UserParam;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class AppUserService implements UserDetailsService {
    
    private UserRepository repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repo.findByUsername(username).map((user) -> {
            // 유저 발견시
            return new AppUserDetail(user.getUsername(), user.getPassword(), Collections.emptyList());
        }).orElseThrow(() -> {
            // Optional 내용물이 null일 경우
            return new UsernameNotFoundException(username);
        });
    }

    public UserEntity signup(UserParam param) {
        UserEntity result = repo.save(
            new UserEntity(
                param.username(), param.password(), param.groupId()
            )
        );
        return result;
    }

    public void signupDummy() {
        repo.save(new UserEntity("root", "1234", ""));
    }
}
