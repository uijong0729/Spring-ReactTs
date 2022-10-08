package com.example.demo.Repository;

import com.example.demo.Entity.UserEntity;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserEntity, Long> {
    Optional<UserEntity> findByUserId(String id);
}