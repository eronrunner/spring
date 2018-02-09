package com.springboot.common.dao.util;

import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface Utils {
	
	Map<Object, Object> pageWrap(Map<Object, Object> map, Page<?> page);
	
	Pageable createPageable(Class<?> clazz,String page, String size, String sort, String[] order);
}
