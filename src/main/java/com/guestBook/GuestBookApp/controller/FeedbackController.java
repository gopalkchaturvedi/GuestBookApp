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
import org.springframework.web.multipart.MultipartFile;

import com.guestBook.GuestBookApp.model.User;
import com.guestBook.GuestBookApp.model.UserEntries;
import com.guestBook.GuestBookApp.service.UserService;
import com.guestBook.GuestBookApp.utility.ResponseDataEntity;
import com.guestBook.GuestBookApp.utility.ResponseDetails;

import java.util.List;

@RestController
public class FeedbackController {
	
	private final static Logger logger = LoggerFactory.getLogger(FeedbackController.class);
	
	@Autowired
	UserService userService;
	
		
	@PostMapping("/register")
	public ResponseDataEntity<?> getRegister(@RequestBody User user) {
		logger.info("registering user");
		User _user=null;;
		try {
			user.setUserRole("user");
			 _user=userService.registerUser(user);
		}catch(Exception e) {
			logger.error("error while registering user"+e.getStackTrace());
			return new ResponseDataEntity<>(_user, ResponseDetails.ERROR);
		}
		return new ResponseDataEntity<>(_user, ResponseDetails.SUCCESS);
	}
	@GetMapping("/login")
	public ResponseDataEntity<?> signIn(@RequestParam("username") String username,@RequestParam("password") String password) {
		
		logger.info("sign in user");
		try {
			if(userService.login(username,password))
				return new ResponseDataEntity<>("Found", ResponseDetails.SUCCESS);
			else
				return new ResponseDataEntity<>("Not Found", ResponseDetails.NOT_FOUND);
		}catch(Exception e) {
			logger.error("error while login user"+e.getStackTrace());
			return new ResponseDataEntity<>(null, e.getMessage(), ResponseDetails.ERROR);
			 
		}
		
	}
	
	@PostMapping("/createEntries")
	public ResponseDataEntity<?> createEntries(@RequestBody UserEntries userEntries) {
		logger.info("creating entries");
		UserEntries _userEntries=null;;
		try {
			
			_userEntries=userService.createEntries(userEntries);
		}catch(Exception e) {
			logger.error("error while creating entries"+e.getStackTrace());
			return new ResponseDataEntity<>(_userEntries, ResponseDetails.ERROR);
		}
		return new ResponseDataEntity<>(_userEntries, ResponseDetails.SUCCESS);
	}
	
	@PostMapping("/createEntriesForFiles")
	public ResponseDataEntity<?> createEntries(@RequestParam("file") MultipartFile file) {
		logger.info("creating entries for files");
		UserEntries _userEntries=null;;
		try {
			UserEntries userEntries = new UserEntries();
			String fileName = userService.storeFile(file);
			userEntries.setFeedback("");
			userEntries.setImgurl(fileName);
			userEntries.setIsApprove(0);
			userEntries.setIsdeleted(0);
			_userEntries=userService.createEntries(userEntries);
		}catch(Exception e) {
			logger.error("error while creating entries"+e.getStackTrace());
			return new ResponseDataEntity<>(_userEntries, ResponseDetails.ERROR);
		}
		return new ResponseDataEntity<>(_userEntries, ResponseDetails.SUCCESS);
	}


	@GetMapping("/getSelectedEntry")
	public ResponseDataEntity<?> getSelectedEntry(@RequestParam("id") long id) {
		logger.info("getting user entries data for getSelectedEntry ");
		UserEntries _userEntries=null;
		try {
			_userEntries=userService.getSelectedEntry(id);
			
			if(_userEntries!=null)
				return new ResponseDataEntity<>(_userEntries, ResponseDetails.SUCCESS);
			else
				return new ResponseDataEntity<>(null, ResponseDetails.NOT_FOUND);
				
				
		}catch(Exception e) {
			e.printStackTrace();
			logger.error("error while getting list of entries"+e.getStackTrace());
			return new ResponseDataEntity<>(_userEntries, ResponseDetails.ERROR);
		}
		
	}
	
	@GetMapping("/isApproveEntry")
	public ResponseDataEntity<?> isApproveEntry(@RequestParam("id") long id) {
		logger.info("getting user entries data ");
		boolean _userEntries=false;
		try {
			_userEntries=userService.approve(id);
			
			if(_userEntries)
				return new ResponseDataEntity<>(_userEntries, ResponseDetails.SUCCESS);
			else
				return new ResponseDataEntity<>(null, ResponseDetails.NOT_FOUND);
				
				
		}catch(Exception e) {
			e.printStackTrace();
			logger.error("error while getting list of entries"+e.getStackTrace());
			return new ResponseDataEntity<>(_userEntries, ResponseDetails.ERROR);
		}
	}
	
	@GetMapping("/getEntriesList")
	public ResponseDataEntity<?> getEntriesList() {
		logger.info("getting user entries data ");
		List <UserEntries>_userEntries=null;;
		try {
			
			_userEntries=userService.getEntriesList();
			if(_userEntries!=null)
				return new ResponseDataEntity<>(_userEntries, ResponseDetails.SUCCESS);
			else
				return new ResponseDataEntity<>(null, ResponseDetails.NOT_FOUND);
		}catch(Exception e) {
			e.printStackTrace();
			logger.error("error while getting list of entries"+e.getStackTrace());
			return new ResponseDataEntity<>(_userEntries, ResponseDetails.ERROR);
		}
		
	}
	@PutMapping("/updateEntries")
	public ResponseDataEntity<?> updateEntries(@RequestBody UserEntries userEntries) {
		logger.info("updating Entries ");
		UserEntries _userEntries=null;;
		try {
			
			_userEntries=userService.update(userEntries);
			if(_userEntries!=null)
				return new ResponseDataEntity<>(_userEntries, ResponseDetails.SUCCESS);
			else
				return new ResponseDataEntity<>(null, ResponseDetails.NOT_FOUND);
				
		}catch(Exception e) {
			logger.error("error while updating entries"+e.getStackTrace());
			return new ResponseDataEntity<>(_userEntries, ResponseDetails.ERROR);
		}
		
	}
	@GetMapping("/deleteEntries")
	public ResponseDataEntity<?> deleteEntries(@RequestParam long id) {
		logger.info("deleting entires ");
		boolean _userEntries=false;
		try {
			_userEntries=userService.delete(id);
			if(_userEntries)
			return new ResponseDataEntity<>(_userEntries, ResponseDetails.SUCCESS);
			else
				return new ResponseDataEntity<>(null, ResponseDetails.NOT_FOUND);
			
		}catch(Exception e) {
			logger.error("error while deleting entries"+e.getStackTrace());
			return new ResponseDataEntity<>(_userEntries, ResponseDetails.ERROR);
		}
	
	}
	
	/**
	 * Store file.
	 *
	 * @param file the file
	 * @return the response data entity
	 */
	
	@PostMapping("/storeFile")
	public ResponseDataEntity<?> storeFile(@RequestParam("file") MultipartFile file) {
		try {
			String fileName = userService.storeFile(file);

			logger.info("storeFile : success");
			return new ResponseDataEntity<>(fileName, ResponseDetails.SUCCESS);

		} catch (Exception e) {
			logger.error("storeFile : error : {}", e.getMessage());
			return new ResponseDataEntity<>(null, e.getMessage(), ResponseDetails.ERROR);
		}

	}
	
}
