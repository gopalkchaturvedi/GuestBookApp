package com.guestBook.GuestBookApp.model;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UserDetailsDTO extends User implements UserDetails {

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {

		/*return  getRole()
				.stream()
				.map(role->(GrantedAuthority)new SimpleGrantedAuthority("ROLE_"+role.getRoleName()))
				.collect(Collectors.toList());
				*/
		return null;
	}

	@Override
	public String getUsername() {
		return super.getUserName();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

	public UserDetailsDTO(final User user) {
		super(user);
		// TODO Auto-generated constructor stub
	}

	
}
