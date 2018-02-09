package com.springboot.common.dao.util;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Component;

import com.springboot.data.model.Account;

@Component
public class UtilsImpl implements Utils {
	
	public static int DEF_PAGE_SIZE = 1;
	public static int DEF_PAGE_NUMGER = 0;
	
	@Autowired
	private AccountUtils m_accountUtils;
	
	@Override
	public Map<Object, Object> pageWrap(Map<Object, Object> map, Page<?> page) {
		// TODO Auto-generated method stub
		map.put("data", m_accountUtils.packingData(page.getContent()));
		map.put("totalPages", page.getTotalPages());
		return map;
	}
	@Override
	
	public Pageable createPageable(Class<?> clazz, String page, String size, String sort, String[] order) {
		String ordering;
		Integer paging;
		Integer resize;
		
		if(page.equals("")) paging = DEF_PAGE_NUMGER; else paging = new Integer(page) - 1;
		if(size.equals("")) resize = DEF_PAGE_SIZE; else resize = new Integer(size); 
		if(order.length < 1) ordering = clazz.getDeclaredFields()[0].getName(); else ordering = order[0];
		
		Sort sorting = new Sort(new Sort.Order(Direction.fromStringOrNull(sort), ordering));
		Pageable pageable = new PageRequest(paging, resize, sorting);
		return pageable;
	}

}
