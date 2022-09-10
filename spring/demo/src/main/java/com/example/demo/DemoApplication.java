package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	
	@Configuration
 	class WebAppConfig implements WebMvcConfigurer {  
		@Override
		public void addResourceHandlers(ResourceHandlerRegistry registry) {
			registry.addResourceHandler("/**")
				.addResourceLocations(
					"classpath:/public/"
				);
			registry.addResourceHandler("/index.html")
				.addResourceLocations(
					"classpath:/public/index.html"
				);
			WebMvcConfigurer.super.addResourceHandlers(registry);
		}
	}

	@EnableWebSecurity
	class SecurityConfig {
		public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
			http.csrf().disable().authorizeRequests()
				.antMatchers(HttpMethod.GET, "/index*", "/static/**", "/*.js", "/*.json", "/*.ico")
				.permitAll()
				.anyRequest().authenticated()
				.and()
				.formLogin().loginPage("/index.html")
				.loginProcessingUrl("/login")
				.defaultSuccessUrl("homepage.html", true)
				.failureUrl("/index.html?error=true");
			return http.build();
		}
	}
}
