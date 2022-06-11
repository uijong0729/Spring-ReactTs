package com.example.demo.Entity;

public enum TodoStatus {
    IMCOMPLETED{
        @Override
        public String toString() {
            return "IMCOMPLETED";
        }
    }, COMPLETED{
        @Override
        public String toString() {
            return "COMPLETED";
        }
    }, DELETED{
        @Override
        public String toString() {
            return "DELETED";
        }
    }
}
