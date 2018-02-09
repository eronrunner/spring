package com.springboot.common.dao.util;

import java.util.List;

import com.springboot.data.model.Account;

public interface AccountUtils {
	Account packingData(final Account account);
	
	List<?> packingData(final List<?> accountList);
}
