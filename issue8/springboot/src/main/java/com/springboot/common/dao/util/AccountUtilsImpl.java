package com.springboot.common.dao.util;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.springboot.data.model.Account;

@Component
public class AccountUtilsImpl implements AccountUtils {

	@Override
	public Account packingData(final Account account) {
		// TODO Auto-generated method stub
		Account packedData = new Account(account);
		
		return packedData;
	}

	@Override
	public List<Account> packingData(final List<?> accountList) {
		// TODO Auto-generated method stub
		List<Account> packedData = new ArrayList<Account>();
		
		for(Account acc : (List<Account>)accountList) {
			packedData.add(packingData(acc));
		}
		
		return packedData;
	}

}
