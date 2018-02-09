package com.springboot.common.dao.util;

import java.util.List;

import com.springboot.data.model.User;

public interface UserUtils {
	User packingData(final User user);
	
	List<User> packingData(final List<User> userList);
}
