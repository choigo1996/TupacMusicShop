package com.cbw.membership.member.dto;

import jakarta.validation.constraints.NotBlank;

public class MemberIdFind {
	@NotBlank
	private String email;

	public MemberIdFind() {
		super();
	}

	public MemberIdFind(@NotBlank String email) {
		super();
		this.email = email;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
}
