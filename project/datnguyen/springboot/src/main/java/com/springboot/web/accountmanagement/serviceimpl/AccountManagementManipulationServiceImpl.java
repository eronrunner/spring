package com.springboot.web.accountmanagement.serviceimpl;

import org.springframework.data.domain.Example;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.stereotype.Service;

import com.springboot.common.dao.AccountDao;
import com.springboot.data.model.Account;
import com.springboot.web.accountmanagement.service.AccountManagementManipulationService;

@Service
public class AccountManagementManipulationServiceImpl implements AccountManagementManipulationService {
	@Autowired
	private AccountDao m_accountDao;
	@Override
	public void registerAccount(Account account) throws Exception {
		// TODO Auto-generated method stub
		Account exampleAcc = new Account(account);
		exampleAcc.setPassword(null);
		
		ExampleMatcher matcher = ExampleMatcher.matching().withStringMatcher(StringMatcher.EXACT);
		Example<Account> example = Example.of(exampleAcc, matcher);

		Account exist = m_accountDao.findOne(example);
		if(exist != null) throw new Exception();
		
		account.setAccountType(new Short("1"));
		account.setActivated(false);
		account.setRegisteredEmail("dat@TTT");
		Account a = new Account();
		a.setAccountId("dat789456");
		a.setAccountType(new Short("1"));
		a.setActivated(false);
		a.setPassword("12345678");
		a.setRegisteredEmail("datb1304659@TT.AA");
		m_accountDao.saveAndFlush(a);
	}

}
