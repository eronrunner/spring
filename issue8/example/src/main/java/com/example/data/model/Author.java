package com.example.data.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "AUTHOR")
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
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "authorId", nullable = false)
	public Long getAuthorId() {
		return authorId;
	}
	
	public void setAuthorId(Long authorId) {
		this.authorId = authorId;
	}
	
	@Column(name = "authorName", nullable = false)
	public String getAuthorName() {
		return authorName;
	}
	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}
	
}
