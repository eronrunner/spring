package com.springboot.web.accountmanagement.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;

import com.springboot.data.model.Account;

@org.springframework.stereotype.Repository
public interface AccountManagementDao extends CrudRepository<Account, String> {
	
	Account findByRegisteredEmail(String registeredEmail);
	
	List<Account> findByAccountIdContaining(String key);
	
}
