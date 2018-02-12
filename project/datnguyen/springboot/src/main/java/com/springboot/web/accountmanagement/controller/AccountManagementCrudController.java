package com.springboot.web.accountmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.web.accountmanagement.service.AccountManagementManipulationService;

@RestController
public class AccountManagementCrudController {
	@Autowired
	private AccountManagementManipulationService m_manipulationService;
	
//	@PostMapping(value = "/account/account-management/create-account")
//	public 
}
