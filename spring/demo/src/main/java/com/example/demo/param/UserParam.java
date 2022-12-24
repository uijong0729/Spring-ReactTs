package com.example.demo.param;

public record UserParam(String username, String password, String groupId) {
    
    @Override
    public String toString() {
        return String.format(
            "id : %d, pass: %s",username, password);
    }
}
