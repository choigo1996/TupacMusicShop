package com.cbw.membership.member.model;


import java.time.LocalDate;

import com.cbw.membership.common.status.Gender;
import com.cbw.membership.common.status.Visit;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Email;

@Entity
@Table(name = "member",uniqueConstraints = {
		@UniqueConstraint(name="uk_member_login_id", columnNames = {"loginId"})
})
public class Member {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false,length = 30, updatable = false)
	private String loginId;
	
	@Column(nullable = false,length = 30)
	private String password;
	
	@Column(nullable = false)
	@Temporal(TemporalType.DATE)
	private LocalDate birthDate;
	@Column(nullable = false,length=5)
	@Enumerated(EnumType.STRING)
	private Gender gender;
	@Column(nullable = false)
	private String name;
	@Column(nullable = false,length=9)
	private Visit visit;
	@Column(nullable = false,length=30)
	@Email
	private String email;
	
	public Member() {
		super();
	}

	public Member(Long id, String loginId, String password, LocalDate birthDate, Gender gender, String name,
			Visit visit, @Email String email) {
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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
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
		return birthDate;
	}

	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Visit getVisit() {
		return visit;
	}

	public void setVisit(Visit visit) {
		this.visit = visit;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
