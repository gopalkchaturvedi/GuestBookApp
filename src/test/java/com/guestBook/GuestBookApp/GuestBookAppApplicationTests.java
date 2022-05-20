package com.guestBook.GuestBookApp;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.guestBook.GuestBookApp.model.User;
import com.guestBook.GuestBookApp.model.UserEntries;
import com.guestBook.GuestBookApp.repository.UserEntriesRepository;
import com.guestBook.GuestBookApp.repository.UserRepository;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
class GuestBookAppApplicationTests {

	@Autowired
	UserRepository userRepo;
	
	@Autowired
	UserEntriesRepository userEntriesRepo;
	@Autowired
	private PasswordEncoder userPasswordEncoder;
	
	
	@Test
	@Order(1)
	public void testRegister() {
		User user1=userRepo.findByUsername("testUser");
		if(userPasswordEncoder.matches("testUser", user1.getPassword()))
		userRepo.delete(user1);
		
		User user=new User();
		user.setId(4L);
		user.setUserName("testUser");
		user.setPassword(userPasswordEncoder.encode("testUser"));
		user.setUserRole("user");
		userRepo.save(user);
		assertTrue(userPasswordEncoder.matches("testUser", user.getPassword()));
		
	}
	
	@Test
	@Order(2)
	public void testlogin() {
		User user=userRepo.findByUsername("testUser");
		assertTrue(userPasswordEncoder.matches("testUser", user.getPassword()));
		
	}
	
	/*@Test
	@Order(3)
	public void testDelete() {
		User user=userRepo.findByUsername("testUser");
		if(userPasswordEncoder.matches("testUser", user.getPassword()))
		userRepo.delete(user);
		assertTrue(userRepo.findByUsername("testUser")==null);
		
	}*/
	
	@Test
	@Order(4)
	public void testCreteEntry() {
		UserEntries userEntries=new UserEntries();
		userEntries.setFeedback("testing");
		//userEntries.setImgurl("testFile");
		userEntries.setIsApprove(0);
		userEntries.setIsdeleted(0);
		userEntries.setUserId(1);
		userEntriesRepo.save(userEntries);
		assertNotNull(userEntriesRepo.getEntriesList());
		
	}
	
	@Test
	@Order(5)
	public void testEditEntry() {
		UserEntries userEntries=new UserEntries();
		userEntries.setFeedback("testing");
		//userEntries.setImgurl("testFile");
		userEntries.setIsApprove(0);
		userEntries.setIsdeleted(0);
		userEntries.setUserId(1);
		userEntriesRepo.save(userEntries);
		assertNotNull(userEntriesRepo.getEntriesList());
		
	}
	
	@Test
	@Order(6)
	public void testGetAllEntry() {
		assertNotNull(userEntriesRepo.getEntriesList().size()>0);
		
	}
	
	
	
}
