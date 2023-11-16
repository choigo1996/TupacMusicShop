package com.cbw.membership.member.dto;

import jakarta.validation.constraints.NotBlank;

public class MemberPasswordFind {
	@NotBlank
	private String loginId;
	@NotBlank
	private String email;
	
	public MemberPasswordFind() {
		super();
	}

	public MemberPasswordFind(@NotBlank String loginId, @NotBlank String email) {
		super();
		this.loginId = loginId;
		this.email = email;
	}

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
