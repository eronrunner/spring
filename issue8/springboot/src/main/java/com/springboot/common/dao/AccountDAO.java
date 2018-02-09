package com.springboot.common.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.springboot.data.model.Account;

@Repository
public interface AccountDAO extends JpaRepository<Account, String> {

}
