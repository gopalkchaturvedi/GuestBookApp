package com.guestBook.GuestBookApp.repository;

import org.springframework.data.repository.CrudRepository;

import com.guestBook.GuestBookApp.model.UserEntries;

public interface UserEntriesRepository extends CrudRepository<UserEntries, Long> {

}
