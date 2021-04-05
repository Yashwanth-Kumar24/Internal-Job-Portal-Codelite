package com.example.demo.controller;

import java.util.List;
import java.util.Optional;
import java.util.regex.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.RegisterError;
import com.example.demo.model.EmployeeModel;
import com.example.demo.model.LoginModel;
import com.example.demo.repository.EmployeeRepository;



@RestController
@CrossOrigin("http://localhost/8081")
public class LoginController {
	
	@Autowired
	EmployeeRepository repo;
	

	@PostMapping("/Login")
	public boolean checkUser(@RequestBody final LoginModel user) {
		List<EmployeeModel> ls = repo.checkUser(user.getEmpId(),user.getPassword());
		
		int k=ls.size();
		
		if(k!=0)
			return true;
		else 
			return false;
	}
		
	
}
