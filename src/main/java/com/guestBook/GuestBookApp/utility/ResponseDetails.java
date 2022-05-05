/*
 * File: ResponseDetails.java
 * Description: Response Details
 * Author: DvayWeb
*/
package com.guestBook.GuestBookApp.utility;

import java.util.Hashtable;

//import com.biome.visitor.utility.CustomStatus;

public class ResponseDetails {

	public static Hashtable<String, CustomStatus> response = new Hashtable<String, CustomStatus>();

	public static final String SUCCESS = "SUCCESS"; // 200;
	public static final String ERROR = "ERROR";
	public static final String FAILED = "FAILED";
	public static final String NOT_FOUND = "NOT_FOUND"; // 404
	public static final String ALREADY_EXISTS = "ALREADY_EXISTS";
	public static final String NOT_ACTIVE = "NOT_ACTIVE";
	public static final String NOT_APPROVED = "NOT_APPROVED";
	public static final String USER_VALIDATION = "USER_VALIDATION";
	static {
		response.put(SUCCESS, new CustomStatus(SUCCESS, "Success", 200));
		response.put(ERROR, new CustomStatus(ERROR, "Error", 500));
		response.put(FAILED, new CustomStatus(FAILED, "Failed", 204));
		response.put(NOT_FOUND, new CustomStatus(NOT_FOUND, "Not found", 404));
		response.put(ALREADY_EXISTS, new CustomStatus(ALREADY_EXISTS, "Already Exists", 201));
		response.put(NOT_ACTIVE, new CustomStatus(NOT_ACTIVE, "Not Active", 400));
		response.put(NOT_APPROVED, new CustomStatus(NOT_APPROVED, "Not Approved", 400));
		response.put(USER_VALIDATION, new CustomStatus(USER_VALIDATION, "USER_VALIDATION", 205));
	}

}

class CustomStatus {

	private String status;
	private String message;
	private int code;

	public CustomStatus(String status, String message, int code) {
		super();
		
		
		this.status = status != "SUCCESS" ? "Failure" : "Success";
		this.message = message;
		this.code = code != 200 ? 400 : 200;
		
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	@Override
	public String toString() {
		return "CustomStatus [status=" + status + ", message=" + message + ", code=" + code + "]";
	}

}
