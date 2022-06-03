package com.example.demo.Repository;

import com.example.demo.Entity.TodoEntity;

import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<TodoEntity, Long> {

}