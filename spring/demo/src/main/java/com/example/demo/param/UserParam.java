package com.example.demo.param;

public record UserParam(String id, String pass) {
       
    @Override
    public String toString() {
        return String.format(
            "id : %d, pass: %s",id, pass);
    }
}
