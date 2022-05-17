package com.guestBook.GuestBookApp.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.guestBook.GuestBookApp.model.User;
import com.guestBook.GuestBookApp.model.UserEntries;

public interface UserService {

	User registerUser(User user);

	User login(String username,String password);

	UserEntries createEntries(UserEntries userEntries);

	

	UserEntries update(UserEntries userEntries);

	boolean delete(long id);
	boolean approve(long id);

	List<UserEntries> getEntriesList(int id);

	UserEntries getSelectedEntry(long id);

	String storeFile(MultipartFile file);
	UserEntries storeFile(MultipartFile file,int userId) throws IOException;

	

	boolean updateFileData(MultipartFile file, int userId, long id)throws IOException;

	boolean findUserByName(String userName);

	//LoginResDTO login(Map<String, String> map);

}
