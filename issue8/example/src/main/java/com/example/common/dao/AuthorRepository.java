package com.example.common.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.data.model.Author;

@Repository
@Transactional
public interface AuthorRepository extends JpaRepository<Author, Long> {

}
