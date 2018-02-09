package com.springboot.common.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.springboot.data.model.User;

@Repository
public interface UserDao extends JpaRepository<User, Long> {

}
