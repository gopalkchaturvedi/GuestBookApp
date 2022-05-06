/*
 * File: ResponseDataEntity.java
 * Description: Api Response Data Entity
 * Author: DvayWeb
*/
package com.guestBook.GuestBookApp.utility;

import java.util.Collections;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ResponseDataEntity<T> {

	private Object data;
	private String status;
	private String message;
	private int code;

	/**
	 * Instantiates a new response data entity.
	 */
	public ResponseDataEntity() {
		super();
	}

	/**
	 * Instantiates a new response data entity.
	 *
	 * @param data   the data
	 * @param status the status
	 */
	public ResponseDataEntity(List<T> data, String status) {

		this.data = data != null ? data : Collections.emptyList();
		setResponseStatus(status);
	}

	/**
	 * Instantiates a new response data entity.
	 *
	 * @param obj    the obj
	 * @param status the status
	 */
	public ResponseDataEntity(Object obj, String status) {

		this.data = obj != null ? obj : new Object() {
		};
		setResponseStatus(status);
	}

	/**
	 * Instantiates a new response data entity.
	 *
	 * @param obj     the obj
	 * @param message the message
	 * @param status  the status
	 */
	public ResponseDataEntity(Object obj, String message, String status) {

		this.data = obj != null ? obj : new Object() {
		};
		this.message = message;
		setResponseStatus(status);
	}

	/**
	 * Instantiates a new response data entity.
	 *
	 * @param status the status
	 */
	public ResponseDataEntity(String status) {

		setResponseStatus(status);
	}

	/*
	 * public ResponseDataEntity(String status, String message, int code) { super();
	 * this.status = status; this.message = message; this.code = code; }
	 */
	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
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

	public void setResponseStatus(String status) {
		this.code = ResponseDetails.response.get(status).getCode();
		if(this.code==205) {
			this.status = status ;
			this.code = ResponseDetails.response.get(status).getCode();
			//this.message = ResponseDetails.response.get(status).getMessage();
	}
	else {
		this.status = status != "SUCCESS" ? "Failure" : "Success";
		this.code = ResponseDetails.response.get(status).getCode();
		this.code = code != 200 ? (code != 403 ? 400 : 403) : 200;
		if (this.message == null) {
			this.message = ResponseDetails.response.get(status).getMessage();
		}
	}
		
	}

	/**
	 * To string.
	 *
	 * @return the string
	 */
	@Override
	public String toString() {
		return "ResponseDataEntity [data=" + data + ", status=" + status + ", message=" + message + ", code=" + code
				+ "]";
	}

}