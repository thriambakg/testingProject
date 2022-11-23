package com.example.demo.controller;

import java.util.List;

import org.hibernate.mapping.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
	
	//not working
	@PostMapping(value = {"photos"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
	public Photo createPhoto(@RequestPart("photoname") Photo photo,
							@RequestPart("photo") MultipartFile[] file) {
		
		return photoRepository.save(photo);
	}
	
}
