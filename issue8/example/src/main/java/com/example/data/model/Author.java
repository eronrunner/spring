package com.example.data.model;

public class Author {
	private Long authorId;
	private String authorName;
	
	public Author() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Author(Long authorId, String authorName) {
		super();
		this.authorId = authorId;
		this.authorName = authorName;
	}
	public Long getAuthorId() {
		return authorId;
	}
	public void setAuthorId(Long authorId) {
		this.authorId = authorId;
	}
	public String getAuthorName() {
		return authorName;
	}
	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}
	
}
