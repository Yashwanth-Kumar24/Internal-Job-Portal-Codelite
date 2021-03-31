package com.example.demo.controller;

import java.util.List;
import java.util.Optional;
import java.util.regex.*;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.AddEmployeeByHr;
import com.example.demo.EditEmployee;
import com.example.demo.RegisterError;
import com.example.demo.model.EmployeeModel;
import com.example.demo.model.EmployeeModelDemo;
import com.example.demo.model.LoginModel;
import com.example.demo.repository.EmployeeRepository;



@RestController
@Transactional
public class EmployeeController {
	
	@Autowired
	EmployeeRepository repo;
	
	
	@PostMapping("/Register")
	public ResponseEntity<?> addUser(@RequestBody final EmployeeModelDemo user){
		
		EmployeeModel em=new EmployeeModel();
		
		List<EmployeeModel> emp=repo.getEmployee();
		int k=emp.size();
		int id=100;
		if(k!=0) {
			id+=k;
			em.setEmpId(String.valueOf(id));
		}
		
		else
			em.setEmpId("100");

		String email = user.getEmail();
		int c=0;
        try{
            EmployeeModel u =repo.findByEmail(email);
            
            
            if(u!=null)
            {
                email = "User with this emailID already exists";
                return ResponseEntity.ok(new RegisterError(email,"","","","",
            			"",""));
            }
        }
        catch (NullPointerException e)
        {
            String regex = "^[A-Za-z0-9+_.-]+@(.+)$";
            Pattern pattern = Pattern.compile(regex);
            Matcher matcher = pattern.matcher(email);
            if(matcher.matches() == false)
            {
                email = "Please enter valid emailID";
                c++;
            }
            else {
                
                email = "";
                
            }
        }
        
        String mobile_number = user.getMobileNumber();
        
        String regex2 = "(^$|[7-9]{1}[0-9]{9})";
        Pattern pattern2 = Pattern.compile(regex2);
        Matcher matcher2 = pattern2.matcher(mobile_number);
        if(matcher2.matches() == false)
        {
            mobile_number = "Mobile number must be a valid 10 digit number";
            c++;
        }
        else {
            mobile_number = "";
        }
        
        String password=user.getPassword();
        String cpassword=user.getCpassword();
        if(!(password.equals(cpassword))) {
        	password= "Password mismatch";
        	cpassword= "Confirm password must be same as password";
        	c++;
        }
        
        
        if(c==0) {
        	
        	em.setEmail(user.getEmail());
        	em.setPassword(user.getPassword());
        	em.setMobileNumber(user.getMobileNumber());
        	em.setDepartment(false);
        	em.setRole("Employee");
        	em.setUserName(user.getUserName());
        	repo.save(em);
        	return ResponseEntity.ok("Registered Successfully, Your Employee Id is :"+em.getEmpId());
        }
        
        ResponseEntity rs= ResponseEntity.ok(new RegisterError(email,password,cpassword,"",mobile_number,
    			"",""));
    
        
        return ResponseEntity.ok(new RegisterError(email,password,cpassword,"",mobile_number,
    			"",""));
        
	}
	
	@PostMapping("/admin/add")
	public ResponseEntity<?> addEmployee(@RequestBody final AddEmployeeByHr emp){
		List<EmployeeModel> users=repo.getEmployee();
		int k=users.size();
		int id=100;
		EmployeeModel nemp=new EmployeeModel();
		if(k!=0) {
			id+=k;
			nemp.setEmpId(String.valueOf(id));
		}
		
		else
			nemp.setEmpId("100");
		
		
		nemp.setUserName(emp.getUserName());
		nemp.setEmail(emp.getEmail());
    	nemp.setPassword(emp.getPassword());
    	nemp.setMobileNumber("9999999999");
    	nemp.setDepartment(false);
    	nemp.setRole(emp.getRole());
    	repo.save(nemp);
    	
		
		repo.save(nemp);
		return ResponseEntity.ok("Added with id: "+nemp.getEmpId());
		
	}
	
	
	@PutMapping("/admin/update/{empId}")
	public String editEmployee(@RequestBody final EditEmployee user,@PathVariable("empId") String id){
		
		EmployeeModel em=repo.findByEmpId(id);
		repo.deleteByEmpId(id);
		em.setPassword(user.getPassword());
		em.setRole(user.getRole());
		em.setEmail(user.getEmail());
		
		repo.save(em);
		return "Edited";
	}
	
	@GetMapping("/admin")
	public List<EmployeeModel> getUsers(){
		List<EmployeeModel> ls = repo.getEmployee();
		return repo.findAll();
	}
	
	@GetMapping("/getEmployeeById/{empId}")
	public EmployeeModel getEmployeeById(@PathVariable("empId") String id){
		return repo.getEmployeeById(id);
		
	}
	
	@DeleteMapping("/admin/delete/{empId}")
	public void deleteEmployeeById(@PathVariable("empId") String empId) {
		repo.deleteByEmpId(empId);
	}
	
	@RequestMapping("/getEmail/{email}")
	public  EmployeeModel getUsers(@PathVariable("email") String email) {
		
		return repo.findByEmail(email);
		
	}	
	
}
