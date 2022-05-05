package com.guestBook.GuestBookApp.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.guestBook.GuestBookApp.model.User;
import com.guestBook.GuestBookApp.model.UserEntries;
import com.guestBook.GuestBookApp.service.UserService;
import com.guestBook.GuestBookApp.utility.ResponseDataEntity;
import com.guestBook.GuestBookApp.utility.ResponseDetails;

import antlr.collections.List;

@RestController
public class FeedbackController {
	
	private final static Logger logger = LoggerFactory.getLogger(FeedbackController.class);
	
	@Autowired
	UserService userService;
	
		
	@PostMapping("/register")
	public ResponseDataEntity<?> getRegister(@RequestBody User user) {
		logger.info("reistering user");
		User _user=null;;
		try {
			user.setUserRole("user");
			 _user=userService.registerUser(user);
		}catch(Exception e) {
			logger.error("error while reistering user"+e.getStackTrace());
			return new ResponseDataEntity<>(_user, ResponseDetails.ERROR);
		}
		return new ResponseDataEntity<>(_user, ResponseDetails.SUCCESS);
	}
	@GetMapping("/login")
	public ResponseDataEntity<?> getRegister(@RequestParam("username") String username,@RequestParam("password") String password) {
		
		logger.info("sign in user");
		try {
			if(userService.login(username,password))
				return new ResponseDataEntity<>("Found", ResponseDetails.SUCCESS);
			else
				return new ResponseDataEntity<>("Not Found", ResponseDetails.SUCCESS);
		}catch(Exception e) {
			logger.error("error while login user"+e.getStackTrace());
			return new ResponseDataEntity<>(null, e.getMessage(), ResponseDetails.ERROR);
			 
		}
		
	}
	
	@PostMapping("/createEntries")
	public ResponseDataEntity<?> createEntries(@RequestBody UserEntries userEntries) {
		logger.info("reistering user");
		UserEntries _userEntries=null;;
		try {
			
			_userEntries=userService.createEntries(userEntries);
		}catch(Exception e) {
			logger.error("error while reistering user"+e.getStackTrace());
			return new ResponseDataEntity<>(_userEntries, ResponseDetails.ERROR);
		}
		return new ResponseDataEntity<>(_userEntries, ResponseDetails.SUCCESS);
	}

	@GetMapping("/getEntries")
	public ResponseDataEntity<?> getEntries() {
		logger.info("reistering user");
		Iterable _userEntries=null;;
		try {
			
			_userEntries=userService.finAll();
		}catch(Exception e) {
			logger.error("error while reistering user"+e.getStackTrace());
			return new ResponseDataEntity<>(_userEntries, ResponseDetails.ERROR);
		}
		return new ResponseDataEntity<>(_userEntries, ResponseDetails.SUCCESS);
	}
	@PutMapping("/updateEntries")
	public ResponseDataEntity<?> updateEntries(@RequestBody UserEntries userEntries) {
		logger.info("reistering user");
		UserEntries _userEntries=null;;
		try {
			
			_userEntries=userService.update(userEntries);
		}catch(Exception e) {
			logger.error("error while reistering user"+e.getStackTrace());
			return new ResponseDataEntity<>(_userEntries, ResponseDetails.ERROR);
		}
		return new ResponseDataEntity<>(_userEntries, ResponseDetails.SUCCESS);
	}
	@DeleteMapping("/updateEntries")
	public ResponseDataEntity<?> deleteEntries(@RequestParam long id) {
		logger.info("reistering user");
		boolean _userEntries=false;
		try {
			
			_userEntries=userService.delete(id);
		}catch(Exception e) {
			logger.error("error while reistering user"+e.getStackTrace());
			return new ResponseDataEntity<>(_userEntries, ResponseDetails.ERROR);
		}
		return new ResponseDataEntity<>(_userEntries, ResponseDetails.SUCCESS);
	}
	
}
