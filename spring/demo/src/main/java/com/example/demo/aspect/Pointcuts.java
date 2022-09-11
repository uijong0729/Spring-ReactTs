package com.example.demo.aspect;

import org.aspectj.lang.annotation.Pointcut;

public class Pointcuts {
        
    @Pointcut("execution(* com.example.demo..*(..))")
    public void controllerPointcut() {}
}
