package com.example.web.bookmanagement.serviceimpl;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.common.dao.BookRepository;
import com.example.data.model.Author;
import com.example.data.model.Book;
import com.example.web.bookmanagement.service.BookManagementService;

@Service
public class BookManagementServiceImpl implements BookManagementService {
	@Autowired
	private BookRepository m_bookRe;
//	private static List<Book> m_bookList = new ArrayList<Book>();
//	
//	static {
//		Author author1 = new Author(new Long("1"), "Ahmad Reza Seddighi");
//		Author author2 = new Author(new Long("2"), "Adam Freeman");
//		Book book1 = new Book(new Long("1"), "Spring persitence with Hibernate", author1);
//		Book book2 = new Book(new Long("2"), "AngularJs Pro", author2);
//		
//		m_bookList.add(book1);
//		m_bookList.add(book2);
//	}
	
	@Override
	public List<Book> getBookList() {
		// TODO Auto-generated method stub
		return m_bookRe.findAll();
	}

}
