package com.guestBook.GuestBookApp.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.guestBook.GuestBookApp.model.User;
import com.guestBook.GuestBookApp.model.UserEntries;
import com.guestBook.GuestBookApp.repository.UserEntriesRepository;
import com.guestBook.GuestBookApp.repository.UserRepository;
import com.guestBook.GuestBookApp.service.UserService;

import antlr.collections.List;
import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserEntriesRepository userEntriesRepository;
	

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
	public Iterable finAll() {
		// TODO Auto-generated method stub
		Iterable list=userEntriesRepository.findAll();
		return list;
	}

	@Override
	public UserEntries update(UserEntries userEntries) {
		// TODO Auto-generated method stub
		return userEntriesRepository.save(userEntries);
	}

	@Override
	public boolean delete(long id) {
		java.util.Optional<UserEntries> opt=userEntriesRepository.findById(id);
		UserEntries userEntries=null;
		if(opt.isPresent())
		{
		 userEntries=opt.get();
		 userEntriesRepository.delete(userEntries);
		 return true;
		}
		else
		return false;
	}

}
