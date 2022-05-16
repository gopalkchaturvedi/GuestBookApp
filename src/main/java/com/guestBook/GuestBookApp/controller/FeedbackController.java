package com.guestBook.GuestBookApp.controller;

import java.io.ByteArrayOutputStream;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.guestBook.GuestBookApp.model.User;
import com.guestBook.GuestBookApp.model.UserDetailsDTO;
import com.guestBook.GuestBookApp.model.UserEntries;
import com.guestBook.GuestBookApp.service.UserService;
import com.guestBook.GuestBookApp.utility.ResponseDataEntity;
import com.guestBook.GuestBookApp.utility.ResponseDetails;

@RestController
public class FeedbackController {
	
	private final static Logger logger = LoggerFactory.getLogger(FeedbackController.class);
	
	@Autowired
	UserService userService;
	@Autowired
	UserDetailsService	userDetailsService;
	
	@Autowired
	private PasswordEncoder userPasswordEncoder;
	
	@PostMapping("open/register")
	public ResponseDataEntity<?> getRegister(@RequestBody User user) {
		logger.info("registering user");
		User _user=null;;
		try {
			
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
			User usr=userService.login(username,password);
			if(usr!=null)
				return new ResponseDataEntity<>(usr, "found",ResponseDetails.SUCCESS);
			else
				return new ResponseDataEntity<>(null,"Not Found", ResponseDetails.NOT_FOUND);
		}catch(Exception e) {
			logger.error("error while login user"+e.getStackTrace());
			return new ResponseDataEntity<>(null, e.getMessage(), ResponseDetails.ERROR);
			 
		}
		
	}
	
	
	@PreAuthorize("hasAnyRole('ADMIN')")
	@PostMapping("/secured/login")
	public ResponseDataEntity<?> securedSignIn(@RequestParam("username") String username,@RequestParam("password") String password) {
		
		logger.info("sign in user"+username);
		logger.info("password"+password);
		
		try {
			
			UserDetailsDTO usr=(UserDetailsDTO) userDetailsService.loadUserByUsername(username);
			//System.out.println("matched "+userPasswordEncoder.matches(password, usr.getPassword()));
			logger.info("sign in user"+usr.getUserName()+" role "+usr.getUserRole());
			if(usr!=null) {
				if(userPasswordEncoder.matches(password, usr.getPassword()))
				return new ResponseDataEntity<>(usr, "found",ResponseDetails.SUCCESS);
				else
				return new ResponseDataEntity<>(null,"Incorrect password ", ResponseDetails.NOT_FOUND);
			}
			else
				return new ResponseDataEntity<>(null,"user does not exists ", ResponseDetails.NOT_FOUND);
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
			logger.error("error while getting list of entries"+e.getStackTrace());
			return new ResponseDataEntity<>(_userEntries, ResponseDetails.ERROR);
		}
	}
	
	@GetMapping("/secured/getEntriesList")
	public ResponseDataEntity<?> getEntriesList(@RequestParam("id") int id) {
		logger.info("getting user entries data ");
		List <UserEntries>_userEntries=null;;
		try {
			_userEntries=userService.getEntriesList(id);
			logger.info("getting user entries data "+_userEntries.size());
			if(_userEntries.size()>0)
				return new ResponseDataEntity<>(_userEntries,"Success", ResponseDetails.SUCCESS);
			else
				return new ResponseDataEntity<>(null,"No Record Found", ResponseDetails.NOT_FOUND);
		}catch(Exception e) {
			logger.error("error while getting list of entries"+e.getStackTrace());
			return new ResponseDataEntity<>(_userEntries, ResponseDetails.ERROR);
		}
		
	}
	@PutMapping("/open/updateEntries")
	public ResponseDataEntity<?> updateEntries(@RequestBody UserEntries userEntries) {
		logger.info("updating Entries ");
		UserEntries _userEntries=null;;
		try {
			logger.info(" id for update  "+userEntries.getId());
			System.out.println("id for update  "+userEntries.getId());
		
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

	@PostMapping("/storeFileData")
	public ResponseDataEntity<?> storeFile(@RequestParam("file") MultipartFile file,@RequestParam("userId") int userId) {
		try {
			UserEntries userEntries=userService.storeFile(file,userId);

			logger.info("storeFile : success");
			if (userEntries!=null)
			return new ResponseDataEntity<>(userEntries.getFilename(),userEntries.getFilename() +"file uploaded successfully", ResponseDetails.SUCCESS);
			else
			return new ResponseDataEntity<>(null,"error while file uploadeding", ResponseDetails.ERROR);
				
		} catch (Exception e) {
			logger.error("storeFile : error : {}", e.getMessage());
			return new ResponseDataEntity<>(null, e.getMessage(), ResponseDetails.ERROR);
		}

	}
	
	@PutMapping("/updateStoreFileData")
	public ResponseDataEntity<?> updateStoreFileData(@RequestParam("file") MultipartFile file,@RequestParam("userId") int userId,@RequestParam("Id") long Id) {
		try {	
			logger.info("storeFile : success");
			if (userService.updateFileData(file,userId,Id))
			{	
			return new ResponseDataEntity<>("upoaded","file uploaded successfully", ResponseDetails.SUCCESS);
			}else {
			return new ResponseDataEntity<>(null,"error while file uploadeding", ResponseDetails.ERROR);
			}
		} catch (Exception e) {
			logger.error("storeFile : error : {}", e.getMessage());
			return new ResponseDataEntity<>(null, e.getMessage(), ResponseDetails.ERROR);
		}

	}


	@PostMapping("/downLoadfile")
	public ResponseEntity<?> downLoadfile(@RequestBody long id) {
		System.out.println("getting data for "+id);
	    UserEntries userEntries = userService.getSelectedEntry(id);
	    System.out.println(userEntries.getId()+" file name "+userEntries.getFilename()+"filedata Size"+userEntries.getFiledata().length);
	    //ByteArrayOutputStream fileData=new ByteArrayOutputStream();
	    ByteArrayOutputStream baos = new ByteArrayOutputStream(userEntries.getFiledata().length);
	    baos.write(userEntries.getFiledata(), 0, userEntries.getFiledata().length);
	    HttpHeaders header = new HttpHeaders();
        header.setContentType(new MediaType("application", "force-download"));
        header.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename="+userEntries.getFilename());
        return new ResponseEntity<>(new ByteArrayResource(baos.toByteArray()),
                header, HttpStatus.CREATED);
        
        /*
	    return ResponseEntity.ok()
	        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + userEntries.getFilename() + "\"")
	        .body(userEntries.getFiledata());
	        */
	  }
}
