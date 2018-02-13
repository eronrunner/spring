package com.springboot.system.notificaition;

import org.springframework.stereotype.Component;

public interface MessageService {
	
	public abstract Message createMessage(Message ms);
	public abstract Message messageSuccess();
}
