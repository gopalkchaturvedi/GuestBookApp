package com.guestBook.GuestBookApp.Security;

//import com.biome.server.authServer.oauth2.config.encryption.Encoders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;


@Configuration
@EnableWebSecurity
public class ServerSecurityConfig extends WebSecurityConfigurerAdapter {

	//@Autowired
	//private final DataSource dataSource;

	@Autowired
	private PasswordEncoder userPasswordEncoder;
	
	@Autowired
	private UserDetailsService userDetailsService;

	/**
	 * Instantiates a new server security config.
	 *
	 * @param dataSource the data source
	 *
	public ServerSecurityConfig(final DataSource dataSource) {
		this.dataSource = dataSource;
	}*/

	/**
	 * Configure.
	 *
	 * @param auth the auth
	 * @throws Exception the exception
	 */
	@Override
	protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(userPasswordEncoder);
	}

	/**
	 * Authentication manager bean.
	 *
	 * @return the authentication manager
	 * @throws Exception the exception
	 
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
	*/
	
	@Override
	public void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().anonymous().and().authorizeRequests()
		.antMatchers("**/open/**")
		.permitAll()
		.antMatchers("**/secure/**").authenticated()
		.and().exceptionHandling();
		
	}

	
}
