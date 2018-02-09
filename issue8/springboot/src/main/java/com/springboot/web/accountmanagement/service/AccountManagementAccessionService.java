package com.springboot.web.accountmanagement.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.springboot.data.model.Account;

public interface AccountManagementAccessionService {

	Account findAccount(String accountId);

	Page<Account> findAccounts(String page, String size, String sort, String[] order);

	Account findByRegisteredEmail(String email);

	List<Account> findAllAccounts();

	List<Account> searchAccountById(String key);

}
