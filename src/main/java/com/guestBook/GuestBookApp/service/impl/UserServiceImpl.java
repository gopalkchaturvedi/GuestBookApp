package com.guestBook.GuestBookApp.service.impl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.guestBook.GuestBookApp.model.User;
import com.guestBook.GuestBookApp.model.UserDetailsDTO;
import com.guestBook.GuestBookApp.model.UserEntries;
import com.guestBook.GuestBookApp.repository.UserEntriesRepository;
import com.guestBook.GuestBookApp.repository.UserRepository;
import com.guestBook.GuestBookApp.service.UserService;

@Service
public class UserServiceImpl implements UserDetailsService, UserService {
	private final static Logger logger = LoggerFactory.getLogger(UserDetailsService.class);
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserEntriesRepository userEntriesRepository;
	
	@Autowired
	private PasswordEncoder userPasswordEncoder;
	
	
	
	private Path fileStorageLocation;
	
	
	@Override
	public User registerUser(User user) {
		user.setPassword(userPasswordEncoder.encode(user.getPassword()));
		System.out.println(user.getUserRole());
		User _user=userRepository.save(user);
		return _user;

	}
	
	@Override
	public User login(String username,String password) {
		User user = userRepository.findByUsername(username);
		return userRepository.findByUsernamePassword(username,password);
		
		
	}

	@Override
	public UserEntries createEntries(UserEntries userEntries) {
			
		return userEntriesRepository.save(userEntries);
		
	}

	@Override
	public List<UserEntries> getEntriesList(int id) {
		// TODO Auto-generated method stub
		List<UserEntries> list=null;
		if(id==0)
		list=userEntriesRepository.getEntriesList();
		else
		list=userEntriesRepository.getEntriesListByUser(id);
		return list;
	}

	@Override
	public UserEntries update(UserEntries userEntries) {
		// TODO Auto-generated method stub
		System.out.println("updating value for id "+userEntries.getId());
		java.util.Optional<UserEntries> opt=userEntriesRepository.findById(userEntries.getId());
		UserEntries _userEntries=null;
		if(opt.isPresent())
		{
			System.out.println("present  value for id "+userEntries.getId());
			_userEntries=opt.get();
			System.out.println("present  feedback for id "+userEntries.getFeedback());
			_userEntries.setFeedback(userEntries.getFeedback());
			_userEntries.setImgurl("");
			_userEntries.setIsApprove(userEntries.getIsApprove());
			_userEntries.setUserId(userEntries.getUserId());
			_userEntries.setFilename("");
			_userEntries.setFiletype("");
			_userEntries.setFiledata(null);
		 
			return userEntriesRepository.save(_userEntries);
		}
		return userEntries;
	}

	@Override
	public boolean delete(long id) {
		java.util.Optional<UserEntries> opt=userEntriesRepository.findById(id);
		UserEntries userEntries=null;
		if(opt.isPresent())
		{
		 userEntries=opt.get();
		 userEntries.setIsdeleted(1);
		 userEntriesRepository.save(userEntries);
		 return true;
		}
		else
		return false;
	}



	@Override
	public boolean approve(long id) {
		java.util.Optional<UserEntries> opt=userEntriesRepository.findById(id);
		UserEntries userEntries=null;
		if(opt.isPresent())
		{
		 userEntries=opt.get();
		 userEntries.setIsApprove(1);
		 userEntriesRepository.save(userEntries);
		 return true;
		}
		return false;
	}

	@Override
	public UserEntries getSelectedEntry(long id) {
		java.util.Optional<UserEntries> opt=userEntriesRepository.findById(id);
		UserEntries userEntries=null;
		if(opt.isPresent())
		{
		 userEntries=opt.get();
		 
		 return userEntries;
		}
		return null;
	}

	
	public UserEntries storeFile(MultipartFile file,int userId) throws IOException {
	    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
	    UserEntries UserEntries =new UserEntries(userId,fileName, file.getContentType(), file.getBytes());
	    return userEntriesRepository.save(UserEntries);
	  }
	
	@Override
	public String storeFile(MultipartFile file) {
		initStorage();
		// Normalize file name
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());

		try {
				
			// Copy file to the target location (Replacing existing file with the same name)
			Path targetLocation = this.fileStorageLocation.resolve(fileName);
			Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

			//return fileName;
		} catch (Exception ex) {
			
		}
		return fileName;
	}
	public void initStorage() {
		this.fileStorageLocation = Paths.get("D:/test").toAbsolutePath().normalize();

		try {
			if (!Files.exists(this.fileStorageLocation))
				Files.createDirectories(this.fileStorageLocation);
		} catch (Exception ex) {
			
		}
	}

	/**
	 * Load user by username.
	 *
	 * @param username the username
	 * @return the user details
	 * @throws UsernameNotFoundException the username not found exception
	 */
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username);
		if (user != null) {
			return new UserDetailsDTO(user);
		}

		throw new UsernameNotFoundException("Invalid username or password.");
	}

	@Override
	public boolean updateFileData(MultipartFile file, int userId, long Id)throws IOException {
		java.util.Optional<UserEntries> opt=userEntriesRepository.findById(Id);
		UserEntries _userEntries=null;
		boolean status=false;
		if(opt.isPresent())
		{
			_userEntries=opt.get();
			_userEntries.setFeedback("");
			_userEntries.setFilename(file.getName());
			_userEntries.setFiletype(file.getContentType());
			_userEntries.setFiledata(file.getBytes());
			_userEntries.setImgurl(file.getName());
			userEntriesRepository.save(_userEntries);
			status=true;
			 
		}
		return status;

}
}