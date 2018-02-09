package com.springboot.web.accountmanagement;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.data.model.Account;
import com.springboot.web.accountmanagement.service.AccountManagementAccessionService;
import com.springboot.web.accountmanagement.service.AccountManagementManipulationService;

@RestController
public class AccountManagementGetController {
	@Autowired
	private AccountManagementAccessionService m_accessionService;
	
	@GetMapping(value = "/account/account-management/{accountId}")
	public Map<Object, Object> findAccount(@PathVariable("accountId") String accountId) {
		Map<Object, Object> wrapper = new HashMap<Object, Object>();
		wrapper.put("data", m_accessionService.findAccount(accountId));
		return wrapper;
	}
	
	@GetMapping(value = "/account/account-management/registered-email-account/{email}")
	public Map<Object, Object> findAccountByRegisteredEmail(@PathVariable("email") String email){
		Map<Object, Object> wrapper = new HashMap<Object, Object>();
		wrapper.put("data", m_accessionService.findByRegisteredEmail(email));
		return wrapper;
	}
	
	@GetMapping(value = "/account/account-management/accounts")
	public Map<Object, Object> getAccount(@RequestParam("page") String page, @RequestParam("size") String size, @RequestParam("sort") String sort, @RequestParam("order") String[] order){
		Map<Object, Object> wrapper = new HashMap<Object, Object>();
		Page<Account> result = m_accessionService.findAccounts(page, size, sort, order);
//		m_controllerUtils.pageWrap(wrapper, paging);
		wrapper.put("data", result);
		return wrapper;
	}
	
	@GetMapping(value = "/account/account-management/all-accounts")
	public Map<Object, Object> findAllAccount(){
		Map<Object, Object> wrapper = new HashMap<Object, Object>();
		List<Account> result = m_accessionService.findAllAccounts();
//		m_controllerUtils.pageWrap(wrapper, paging);
		wrapper.put("data", result);
		return wrapper;
	}
	
	@GetMapping(value = "/account/account-management/search-account-by-id")
	public Map<Object, Object> searchAccountById(@RequestParam("key") String key){
		Map<Object, Object> wrapper = new HashMap<Object, Object>();
		wrapper.put("data", m_accessionService.searchAccountById(key));
		return wrapper;
	}
	
	
}
