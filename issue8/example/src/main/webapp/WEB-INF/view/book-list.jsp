<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Book List</title>
</head>
<body>
	<h1>Book List</h1>

	<table border="1">
		<tr>
			<th align="left">Author</th>
			<th align="left">Title</th>
		</tr>
		<c:forEach items="${bookList}" var="book">
			<tr>
				<td>${book.author.authorName}</td>
				<td>${book.bookTitle}</td>
			</tr>
		</c:forEach>
	</table>
</body>
</html>