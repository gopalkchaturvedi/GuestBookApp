package com.guestBook.GuestBookApp.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.guestBook.GuestBookApp.model.UserEntries;

import java.util.List;

public interface UserEntriesRepository extends CrudRepository<UserEntries, Long> {
	
	@Query("SELECT c FROM UserEntries c WHERE c.isdeleted=0")
	List<UserEntries> getEntriesList();

}
