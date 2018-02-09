package com.springboot.system.notificaition;

public class Message implements MessageService{
	
	private String title;
	private String content;
	
	public Message() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Message(String title, String content) {
		super();
		this.title = title;
		this.content = content;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public Message createMessage(Message ms) {
		// TODO Auto-generated method stub
		return null ;
	}
	
}
