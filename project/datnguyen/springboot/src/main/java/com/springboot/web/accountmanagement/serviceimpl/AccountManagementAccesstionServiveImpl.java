package com.springboot.web.accountmanagement.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.springboot.common.dao.AccountDao;
import com.springboot.common.dao.util.AccountUtils;
import com.springboot.common.dao.util.Utils;
import com.springboot.data.model.Account;
import com.springboot.web.accountmanagement.dao.AccountManagementDao;
import com.springboot.web.accountmanagement.service.AccountManagementAccessionService;

@Service
public class AccountManagementAccesstionServiveImpl implements AccountManagementAccessionService {
	@Autowired
	private AccountDao m_accountDao;
	@Autowired
	private AccountUtils m_accountUtils;
	@Autowired
	private AccountManagementDao m_managementDao;
	
	@Autowired
	private Utils m_utils;
	
	@Override
	public Account findAccount(String accountId) {
		return m_accountUtils.packingData(m_accountDao.findOne(accountId));
	}
	
	@Override
	public Page<Account> findAccounts(String page, String size, String sort, String[] order) {
		// TODO Auto-generated method stub
		return m_accountDao.findAll(m_utils.createPageable(Account.class, page, size, sort, order));
	}

	@Override
	public Account findByRegisteredEmail(String email) {
		// TODO Auto-generated method stub
		return m_managementDao.findByRegisteredEmail(email);
	}

	@Override
	public List<Account> findAllAccounts() {
		// TODO Auto-generated method stub
		return m_accountDao.findAll();
	}

	@Override
	public List<Account> searchAccountById(String key) {
		// TODO Auto-generated method stub
		return m_managementDao.findByAccountIdContaining(key);
	}

}
