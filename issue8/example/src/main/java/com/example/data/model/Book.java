package com.example.data.model;

public class Book {
	private Long bookId;
	private String bookTitle;
	private Author author;
	
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Book(Long bookId, String bookTitle, Author author) {
		super();
		this.bookId = bookId;
		this.bookTitle = bookTitle;
		this.author = author;
	}

	public Long getBookId() {
		return bookId;
	}

	public void setBookId(Long bookId) {
		this.bookId = bookId;
	}

	public String getBookTitle() {
		return bookTitle;
	}

	public void setBookTitle(String bookTitle) {
		this.bookTitle = bookTitle;
	}

	public Author getAuthor() {
		return author;
	}

	public void setAuthor(Author author) {
		this.author = author;
	}
	
}
