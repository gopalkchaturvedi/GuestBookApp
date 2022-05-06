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
	
	
	
	@Test
	@Order(1)
	public void testRegister() {
		User user=new User();
		user.setId(4L);
		user.setUserName("testUser");
		user.setPassword("testUser");
		user.setUserRole("user");
		userRepo.save(user);
		assertNotNull(userRepo.findByUsernamePassword("testUser", "testUser"));
		
	}
	
	@Test
	@Order(2)
	public void testlogin() {
		assertEquals("testUser", userRepo.findByUsernamePassword("testUser", "testUser").getUserName());
		
	}
	
	@Test
	@Order(3)
	public void testDelete() {
		User user=userRepo.findByUsernamePassword("testUser", "testUser");
		userRepo.delete(user);
		assertTrue(userRepo.findByUsernamePassword("testUser", "testUser")==null);
		
	}
	
	@Test
	@Order(4)
	public void testCreteEntry() {
		UserEntries userEntries=new UserEntries();
		userEntries.setFeedback("testing");
		userEntries.setImgurl("testFile");
		userEntries.setIsApprove(0);
		userEntries.setIsdeleted(0);
		userEntriesRepo.save(userEntries);
		assertNotNull(userEntriesRepo.getEntriesList());
		
	}
	
	@Test
	@Order(5)
	public void testEditEntry() {
		UserEntries userEntries=new UserEntries();
		userEntries.setFeedback("testing");
		userEntries.setImgurl("testFile");
		userEntries.setIsApprove(0);
		userEntries.setIsdeleted(0);
		userEntriesRepo.save(userEntries);
		assertNotNull(userEntriesRepo.getEntriesList());
		
	}
	
	@Test
	@Order(6)
	public void testGetAllEntry() {
		assertNotNull(userEntriesRepo.getEntriesList().size()>0);
		
	}
	
	
	
}
