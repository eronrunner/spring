package com.example.web.bookmanagement.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.annotation.AccessTime;
import com.example.data.model.Book;

public interface BookManagementService {
	
	@AccessTime
	public List<Book> getBookList();
	
}
