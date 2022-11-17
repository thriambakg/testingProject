package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Photo;
import com.example.demo.repository.PhotoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class PhotoController {

	@Autowired
	private PhotoRepository photoRepository;
	
	@GetMapping("photos")
	public List<Photo> getPhoto() {
		return this.photoRepository.findAll();
	}
}
