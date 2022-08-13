// package com.example.demo.config;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// import lombok.extern.log4j.Log4j;
// import lombok.extern.log4j.Log4j2;

// @Log4j2
// @Configuration
// public class WebAppConfig implements WebMvcConfigurer {  

//     @Override
//     public void addResourceHandlers(ResourceHandlerRegistry registry) {
//         log.debug("config test");

//         registry.addResourceHandler("/**")
//             .addResourceLocations("classpath:/META-INF/resources/public/");
//         WebMvcConfigurer.super.addResourceHandlers(registry);
//     }

// }