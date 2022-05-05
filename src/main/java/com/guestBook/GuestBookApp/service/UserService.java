package com.guestBook.GuestBookApp.service;

import com.guestBook.GuestBookApp.model.User;
import com.guestBook.GuestBookApp.model.UserEntries;

import antlr.collections.List;

public interface UserService {

	User registerUser(User user);

	boolean login(String username,String password);

	UserEntries createEntries(UserEntries userEntries);

	Iterable finAll();

	UserEntries update(UserEntries userEntries);

	boolean delete(long id);

}
