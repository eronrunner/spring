package com.example.common.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.data.model.Book;

@Repository
@Transactional
public interface BookRepository extends JpaRepository<Book, Long> {

}
