package com.example.data.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "BOOK")
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
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "bookId", nullable = false)
	public Long getBookId() {
		return bookId;
	}

	public void setBookId(Long bookId) {
		this.bookId = bookId;
	}
	
	@Column(name = "bookTitle", nullable = false, length = 65355)
	public String getBookTitle() {
		return bookTitle;
	}
	
	public void setBookTitle(String bookTitle) {
		this.bookTitle = bookTitle;
	}
	
	@ManyToOne
	@JoinColumn(name = "author", nullable = false)
	public Author getAuthor() {
		return author;
	}

	public void setAuthor(Author author) {
		this.author = author;
	}
	
}
