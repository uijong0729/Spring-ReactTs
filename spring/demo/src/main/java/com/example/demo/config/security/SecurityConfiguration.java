package com.example.demo.config.security;

import java.util.ArrayList;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable();
        
        // http.authorizeRequests()
        //         .antMatchers("/static/**", "/*.js", "/*.json", "/*.ico")
        //         .permitAll();
        
        // https://www.baeldung.com/spring-security-login
        http.authorizeHttpRequests()
                //.mvcMatchers("/login/**").permitAll()
                .mvcMatchers("/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                // react에서 로그인을 제어하기 때문에 로그인 페이지를index로 지정
                .loginPage("/index.html");  

        http.authenticationProvider(authenticationProvider());
        
        
        return http.build();
    }

    @Bean
    public AuthenticationProvider authenticationProvider(){
        return new AuthenticationProvider() {
            @Override
            public Authentication authenticate(Authentication authentication) throws AuthenticationException {
                var name = authentication.getName();
                var pass = authentication.getCredentials().toString();
                return new UsernamePasswordAuthenticationToken(name, pass, new ArrayList<>());
            }

            @Override
            public boolean supports(Class<?> authentication) {
                return authentication.equals(UsernamePasswordAuthenticationToken.class);
            }
        };
    }
}
