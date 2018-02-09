package com.springboot.data.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "USER")
public class User {
	private Long userId;
	private String firstname;
	private String lastname;
	private String phone;
	private String email;
	private String address;
	private Account account;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public User(User user) {
		this.userId = user.getUserId();
		this.firstname = user.firstname;
		this.lastname = user.lastname;
		this.phone = user.phone;
		this.email = user.email;
		this.address = user.address;
	}
	
	public User(Long userId, String firstname, String lastname, String phone, String email, String address) {
		super();
		this.userId = userId;
		this.firstname = firstname;
		this.lastname = lastname;
		this.phone = phone;
		this.email = email;
		this.address = address;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "userId", nullable = false)
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
	@Column(name = "firstname", nullable = true, length = 65535)
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	
	@Column(name = "lastname", nullable = false,length = 65535)
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	
	@Column(name = "phone", nullable = false, length = 65535)
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	@Column(name = "email", nullable = false, length = 65535)
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	@Column(name = "address", nullable = false, length = 65535)
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	@ManyToOne
	@JoinColumn(name = "account", unique = true, nullable = true)
	public Account getAccount() {
		return account;
	}
	public void setAccount(Account account) {
		this.account = account;
	}
	
}
