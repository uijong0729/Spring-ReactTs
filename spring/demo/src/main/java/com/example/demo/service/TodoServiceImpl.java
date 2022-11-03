package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.TodoEntity;
import com.example.demo.Entity.TodoStatus;
import com.example.demo.Repository.TodoRepository;

@Service
public class TodoServiceImpl implements TodoService{

    TodoRepository repo;

    @Autowired
    public TodoServiceImpl(TodoRepository repo) {
        this.repo = repo;
    }

    public TodoEntity putTodo(TodoEntity todo) {
        TodoEntity result = repo.save(todo);
        return result;
    }

    public TodoEntity getTodo(Long id) {
        Optional<TodoEntity> entity = repo.findById(id);
        TodoEntity result = null;
        if (entity.isPresent()) {
            result = entity.get();
        }
        return result;
    }

    public Iterable<TodoEntity> getTodos() {
        return repo.findAll();
    }

    public void deleteTodo(Long id) {
        repo.deleteById(id);
    }

    public void updateTodo(Long id, TodoStatus status) {
        Optional<TodoEntity> entity = repo.findById(id);
        if (entity.isPresent()) {
            var todo = entity.get();
            todo.setStatus(status);
            repo.save(todo);
        }
    }
}
