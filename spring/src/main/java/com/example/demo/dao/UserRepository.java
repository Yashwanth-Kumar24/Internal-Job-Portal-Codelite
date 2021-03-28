package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.User;



public interface UserRepository extends JpaRepository<User,Integer> {
	
	List<User> findByEmpid(String empid);
	
	@Query("from User where empid=?1 and password=?2")
	List<User> checkUser(String empid, String passoword);
}
