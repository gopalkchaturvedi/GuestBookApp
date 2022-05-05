package com.guestBook.GuestBookApp.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.guestBook.GuestBookApp.model.User;

public interface UserRepository extends CrudRepository<User, Long> {

	@Query("SELECT c FROM User c WHERE c.userName = :username AND c.password = :password")
	public User findByUsernamePassword(@Param("username") String username, @Param("password")String password);

}
