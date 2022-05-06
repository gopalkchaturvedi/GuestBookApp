package com.guestBook.GuestBookApp.service;

import com.guestBook.GuestBookApp.model.User;
import com.guestBook.GuestBookApp.model.UserEntries;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public interface UserService {

	User registerUser(User user);

	boolean login(String username,String password);

	UserEntries createEntries(UserEntries userEntries);

	

	UserEntries update(UserEntries userEntries);

	boolean delete(long id);
	boolean approve(long id);

	List<UserEntries> getEntriesList();

	UserEntries getSelectedEntry(long id);

	String storeFile(MultipartFile file);

}
