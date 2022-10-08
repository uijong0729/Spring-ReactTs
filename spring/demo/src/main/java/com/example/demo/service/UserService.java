package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.UserEntity;
import com.example.demo.Repository.UserRepository;
import com.example.demo.param.UserParam;

@Service
public class UserService {
    
    private UserRepository repo;

    @Autowired
    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public UserEntity login(UserParam param) {
        Optional<UserEntity> entity = repo.findByUserId(param.id());
        if (entity.isPresent()) {
            return entity.get();
        }else {
            return null;
        }
    }

    public UserEntity signup(UserParam param) {
        UserEntity result = repo.save(new UserEntity(param.id(), param.pass(), param.groupId()));
        return result;
    }
}
