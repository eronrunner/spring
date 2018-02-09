package com.springboot.common.dao.util;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.springboot.data.model.User;

@Component
public class UserUtilsImpl implements UserUtils {
	@Autowired
	private AccountUtils m_accountUtils;
	@Override
	public User packingData(final User user) {
		// TODO Auto-generated method stub
		User packedData = new User(user);
		
		packedData.setAccount(m_accountUtils.packingData(user.getAccount()));
		
		return packedData;
	}

	@Override
	public List<User> packingData(final List<User> userList) {
		// TODO Auto-generated method stub
		List<User> packedData = new ArrayList<User>();
		
		for(User u : userList) {
			packedData.add(packingData(u));
		}
		
		return packedData;
	}
	
}
