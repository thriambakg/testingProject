package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.model.Photo;
import com.example.demo.model.User;
import com.example.demo.repository.PhotoRepository;
import com.example.demo.repository.UserRepository;

@SpringBootApplication
public class SpringbootBackendSe317Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendSe317Application.class, args);
	}
	
	
//	@Autowired
//	private UserRepository userRepository;
//	
//	@Autowired
//	private PhotoRepository photoRepository;
//
//	@Override
//	public void run(String... args) throws Exception {
//		// TODO Auto-generated method stub
//		this.userRepository.save(new User("tonynuss", "password"));
//		this.userRepository.save(new User("billgates", "microsoft"));
//
//		
//	}

}
