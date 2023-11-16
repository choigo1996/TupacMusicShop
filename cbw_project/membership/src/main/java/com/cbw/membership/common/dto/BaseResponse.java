package com.cbw.membership.common.dto;

//컨트롤러가 클라이언트에게 응답할때 그 응답 메시지의 형식을 만드는 클래스
public class BaseResponse<T> {
	
	private String resultCode;
	private T data;
	private String message;
	
	public BaseResponse() {
		super();
	}

	public BaseResponse(String resultCode, T data, String message) {
		super();
		this.resultCode = resultCode;
		this.data = data;
		this.message = message;
	}

	public String getResultCode() {
		return resultCode;
	}

	public void setResultCode(String resultCode) {
		this.resultCode = resultCode;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	
	
}
