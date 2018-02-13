package com.springboot.web.accountmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.data.model.Account;
import com.springboot.system.notificaition.Message;
import com.springboot.system.notificaition.MessageService;
import com.springboot.web.accountmanagement.service.AccountManagementManipulationService;

@RestController
public class AccountManagementCrudController {
	@Autowired
	private AccountManagementManipulationService m_manipulationService;

	private MessageService m_message = new Message();
	
	@PostMapping(value = "/account/account-management/register-account")
	public Message registerAccount(@RequestBody Account account) throws Exception {
		m_manipulationService.registerAccount(account);
		return m_message.messageSuccess();
	}
}
