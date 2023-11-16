package com.cbw.membership.member.dto;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import com.cbw.membership.common.status.Gender;
import com.cbw.membership.common.status.Visit;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class MemberDto {
	private long id;
	@NotBlank
	private String loginId;
	@NotBlank
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@#$%^&*!])[A-Za-z\\d@#$%^&*!]{8,20}$",
			message = "영문 숫자 특수문자를 포함한 8~20자리로 입력해주세요")
	private String password;
	@NotBlank
	@Pattern(regexp = "^([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))$",
			message = "날짜형식(YYYY-MM-DD)을 확인해주세요")
	private String birthDate;
	@NotBlank
	@Pattern(regexp = "^(MAN|WOMAN)$",
			message = "MAN이나 WOMAN중 하나를 선택해주세요")
	private String gender;
	@NotBlank
	private String name;
	@NotBlank
	@Pattern(regexp = "^(LOCAL|FOREIGNER)$",
					message = "LOCAL이나 FOREIGNER중 하나를 선택해주세요")
	private String visit;
	@NotBlank
	@Email
	private String email;
	
	public MemberDto() {
		super();
	}

	public MemberDto(long id,
			@NotBlank @Pattern(regexp = "^[a-z]+[a-z0-9]{5,10}$", message = "영문 숫자를 포함한 5~10자리로 입력하세요") String loginId,
			@NotBlank @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@#$%^&*!])[A-Za-z\\d@#$%^&*!]{8,20}$", message = "영문 숫자 특수문자를 포함한 8~20자리로 입력해주세요") String password,
			@NotBlank @Pattern(regexp = "^([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))$", message = "날짜형식(YYYY-MM-DD)을 확인해주세요") String birthDate,
			@NotBlank @Pattern(regexp = "^(MAN|WOMAN)$", message = "MAN이나 WOMAN중 하나를 선택해주세요") String gender,
			@NotBlank @Pattern(regexp = "^[a-zA-Z][ㄱ-힣]{3,9}$", message = "3~9까지의 이름만 가능합니다") String name,
			@NotBlank @Pattern(regexp = "^(LOCAL|FOREIGNER)$", message = "LOCAL이나 FOREIGNER중 하나를 선택해주세요") String visit,
			@NotBlank @Email String email) {
		super();
		this.id = id;
		this.loginId = loginId;
		this.password = password;
		this.birthDate = birthDate;
		this.gender = gender;
		this.name = name;
		this.visit = visit;
		this.email = email;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public LocalDate getBirthDate() {
		return LocalDate.parse(birthDate,
				DateTimeFormatter.ofPattern("yyyy-MM-dd"));
	}

	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}

	public Gender getGender() {
		return Gender.valueOf(gender);
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Visit getVisit() {
		return Visit.valueOf(visit);
	}

	public void setVisit(String visit) {
		this.visit = visit;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
