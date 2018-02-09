package com.springboot.data.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ACCOUNT")
public class Account {
	
	private String accountId;
	private String password;
	private String registeredEmail;
	private Boolean activated;
	private Short accountType;
//	private List<User> users;
	
	public Account() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Account(Account account) {
		this.accountId = account.getAccountId();
		this.password = account.getPassword();
		this.registeredEmail = account.getRegisteredEmail();
		this.activated = account.getActivated();
		this.accountType = account.getAccountType();
	}
	
	public Account(String accountId, String password, String registeredEmail, Boolean activated, Short accountType) {
		super();
		this.accountId = accountId;
		this.password = password;
		this.registeredEmail = registeredEmail;
		this.activated = activated;
		this.accountType = accountType;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "accountId", nullable = false, length = 50)
	public String getAccountId() {
		return accountId;
	}

	public void setAccountId(String accountId) {
		this.accountId = accountId;
	}

	@Column(name = "password", nullable = false, length = 65535)
	public String getPassword() {
		password = "";
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Column(name = "registeredEmail", nullable = false, unique = true, length = 100)
	public String getRegisteredEmail() {
		return registeredEmail;
	}

	public void setRegisteredEmail(String registeredEmail) {
		this.registeredEmail = registeredEmail;
	}

	@Column(name = "activated", nullable = false)
	public Boolean getActivated() {
		return activated;
	}

	public void setActivated(Boolean activated) {
		this.activated = activated;
	}
	
	@Column(name = "accountType", nullable = false)
	public Short getAccountType() {
		return accountType;
	}

	public void setAccountType(Short accountType) {
		this.accountType = accountType;
	}
//	
//	@OneToMany(mappedBy = "account")
//	public List<User> getUsers() {
//		return users;
//	}
//
//	public void setUsers(List<User> users) {
//		this.users = users;
//	}
//	
}
