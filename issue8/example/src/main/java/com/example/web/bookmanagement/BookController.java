package com.example.web.bookmanagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.example.web.bookmanagement.service.BookManagementService;

@Controller
@RequestMapping(value="/book-management")
public class BookController {
	@Autowired
	private BookManagementService bookService;
	
	@RequestMapping(method = RequestMethod.GET)
	public ModelAndView getBookList() {
		ModelAndView model = new ModelAndView();
		model.setViewName("book-list");
		model.addObject("bookList", bookService.getBookList());
		return model;	
	}
}
