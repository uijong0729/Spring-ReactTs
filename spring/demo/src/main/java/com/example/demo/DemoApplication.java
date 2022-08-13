package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import lombok.extern.log4j.Log4j2;

@Log4j2
@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	
	@Configuration
 	class WebAppConfig implements WebMvcConfigurer {  
		@Override
		public void addResourceHandlers(ResourceHandlerRegistry registry) {
			log.debug("================config test==============");

			registry.addResourceHandler("/**")
				.addResourceLocations(
					"classpath:/META-INF/resources/public/",
					"classpath:/public/",
					"classpath:/META-INF/public/",
					"classpath:/resources/public/"
				);
			WebMvcConfigurer.super.addResourceHandlers(registry);
		}

	}
}
