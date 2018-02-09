package com.springboot.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

@Configuration
public class SpringBootPropertiesConfiguration implements EmbeddedServletContainerCustomizer {
	@Autowired
	private Environment evn;
	@Override
	public void customize(ConfigurableEmbeddedServletContainer container) {
		// TODO Auto-generated method stub
		container.setPort(new Integer(evn.getProperty("server.dev.port")));
//		container.setContextPath(evn.getProperty("app.contextPath"));
	}

}
