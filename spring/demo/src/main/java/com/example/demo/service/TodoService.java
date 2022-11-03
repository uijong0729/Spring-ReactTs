package com.example.demo.service;

import com.example.demo.Entity.TodoEntity;
import com.example.demo.Entity.TodoStatus;

public interface TodoService {
    TodoEntity putTodo(TodoEntity todo);
    TodoEntity getTodo(Long id);
    Iterable<TodoEntity> getTodos();
    void deleteTodo(Long id);
    void updateTodo(Long id, TodoStatus status);
}
