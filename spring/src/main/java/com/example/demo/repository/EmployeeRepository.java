package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.EmployeeModel;



public interface EmployeeRepository extends JpaRepository<EmployeeModel,Integer> {
	EmployeeModel findByEmail(String email);
	
	EmployeeModel findByEmpId(String empId);
		
	@Query("from EmployeeModel")
	List<EmployeeModel> getEmployee();
	
	
	void deleteByEmpId(String empId);
	
	@Query("from EmployeeModel where empId=?1")
	EmployeeModel getEmployeeById(String empId);
	
	@Query("from EmployeeModel where empId=?1 and password=?2")
	List<EmployeeModel> checkUser(String empid,String password);
	
}
