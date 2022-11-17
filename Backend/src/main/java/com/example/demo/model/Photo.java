package com.example.demo.model;

import java.io.File;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "photos")
public class Photo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "photo_name")
	private String photoname;
	
	@Column(name = "user_name")
	private String username;
	
//	@Column(name = "photo_img")
//	private File photo;
	
	public Photo() {
		
	}

	
	public Photo(String photoname, String username) {
		super();
		this.username = username;
		this.photoname = photoname;
		//this.photo = photo;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPhotoname() {
		return photoname;
	}

	public void setPhotoname(String photoname) {
		this.photoname = photoname;
	}

//	public File getPhoto() {
//		return photo;
//	}
//
//	public void setPhoto(File photo) {
//		this.photo = photo;
//	}
}
