package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.dao.UserRepository;
import com.example.demo.model.User;

@RestController
public class UserController {
	
	@Autowired
	UserRepository repo;
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@PostMapping("/user")
	public User addUser(User user){
		repo.save(user);
		return user;
	}
	
	
	
	@GetMapping("/getUsers")
	public List<User> getUsers(){
		return repo.findAll();
	}
	
	@GetMapping("/checkUser/{empid}/{password}")
	public List<User> checkUser(String empid,String password){
		return repo.checkUser(empid,password);
	}
	
	@RequestMapping("/getUsers/{empid}")
	public List<User> getUsers(@PathVariable("empid") String empid){
		return repo.findByEmpid(empid);
	}	
	
	
	
	
}
