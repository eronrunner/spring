package com.example.aop;

import java.util.Date;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class AccessTimeLog {
	
	@Around("@annotation(com.example.annotation.AccessTime)")
	public Object logAccessTime(ProceedingJoinPoint joinPoint) throws Throwable {
		Date date = new Date();
		long time = date.getTime();
		Object proceed = joinPoint.proceed();
		System.out.println("Client accessed to Server at " + new Date(time) + " by " + joinPoint.getSignature() + " method");
		
		return proceed;
	}
}
