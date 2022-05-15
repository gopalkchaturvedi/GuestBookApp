package com.guestBook.GuestBookApp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class UserEntries {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;
	String feedback;
	String imgurl;
	int isApprove;
	int isdeleted=0;
	int userId;
	String filename;
	String filetype;
	@Lob
	byte[] filedata;
	
	public UserEntries() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	public UserEntries(int userId,
			String filename, String filetype, byte[] filedata) {
		this.feedback = "";
		this.userId = userId;
		this.filename = filename;
		this.imgurl = filename;
		this.filetype = filetype;
		this.filedata = filedata;
	}



	public String getFilename() {
		return filename;
	}



	public void setFilename(String filename) {
		this.filename = filename;
	}



	public String getFiletype() {
		return filetype;
	}



	public void setFiletype(String filetype) {
		this.filetype = filetype;
	}



	public byte[] getFiledata() {
		return filedata;
	}



	public void setFiledata(byte[] filedata) {
		this.filedata = filedata;
	}



	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	public String getImgurl() {
		return imgurl;
	}
	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}
	public int getIsApprove() {
		return isApprove;
	}
	public void setIsApprove(int isApprove) {
		this.isApprove = isApprove;
	}
	public int getIsdeleted() {
		return isdeleted;
	}
	public void setIsdeleted(int isdeleted) {
		this.isdeleted = isdeleted;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	
	
	
	

}
