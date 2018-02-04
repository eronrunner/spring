package com.omega.annotation;

import java.util.Date;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class AccessTimeAspect {
	
	@Around("@anotation(AccessTime)")
	public Object logAccessTime(ProceedingJoinPoint joinPoint) throws Throwable{
		Date date = new Date();
		long time = date.getTime();
		Object proceed = joinPoint.proceed();
		System.out.println("Client accessed to " + joinPoint.getSignature() +" at" + new Date(time) + " to Server");
		return joinPoint.proceed();
	}
}
