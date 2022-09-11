package com.example.demo.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Aspect
@Slf4j
@Component
public class LogTracer {
    
    public LogTracer() {
        log.info("created LogTracer");
    }

    @Before("com.example.demo.aspect.Pointcuts.controllerPointcut()")
    public void startLog(JoinPoint joinPoint) throws Throwable {
        String signature = joinPoint.getSignature().getName();
        log.info("[call method] = {}", signature);
    }
}
