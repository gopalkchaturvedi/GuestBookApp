package com.guestBook.GuestBookApp.service.impl;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.guestBook.GuestBookApp.model.User;
import com.guestBook.GuestBookApp.model.UserEntries;
import com.guestBook.GuestBookApp.repository.UserEntriesRepository;
import com.guestBook.GuestBookApp.repository.UserRepository;
import com.guestBook.GuestBookApp.service.UserService;
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserEntriesRepository userEntriesRepository;
	
	private Path fileStorageLocation;
	@Override
	public User registerUser(User user) {
		User _user=userRepository.save(user);
		return _user;

	}

	@Override
	public boolean login(String username,String password) {
		User user=userRepository.findByUsernamePassword(username,password);
		if (user!=null)
		return true;
		else
		return false;
	}

	@Override
	public UserEntries createEntries(UserEntries userEntries) {
			
		return userEntriesRepository.save(userEntries);
		
	}

	@Override
	public List<UserEntries> getEntriesList() {
		// TODO Auto-generated method stub
		List<UserEntries> list=userEntriesRepository.getEntriesList();
		return list;
	}

	@Override
	public UserEntries update(UserEntries userEntries) {
		// TODO Auto-generated method stub
		java.util.Optional<UserEntries> opt=userEntriesRepository.findById(userEntries.getId());
		UserEntries _userEntries=null;
		if(opt.isPresent())
		{
			_userEntries=userEntries=opt.get();
			_userEntries.setFeedback(userEntries.getFeedback());
			_userEntries.setImgurl(userEntries.getImgurl());
			_userEntries.setIsApprove(userEntries.getIsApprove());
		 
			return userEntriesRepository.save(userEntries);
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

}
