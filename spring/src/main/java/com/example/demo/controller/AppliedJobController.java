package com.example.demo.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.AppliedJob;
import com.example.demo.DeleteAppliedJob;
import com.example.demo.Message;
import com.example.demo.model.AppliedJobModel;
import com.example.demo.repository.AppliedJobRepository;


import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;  


@Transactional
@RestController
@CrossOrigin("http://localhost/4200")
public class AppliedJobController {
	
	@Autowired
	AppliedJobRepository repo;
	
	@PostMapping("home/{employeeId}")   
	public ResponseEntity<?> jobMapping(@RequestBody final AppliedJob job,@PathVariable("employeeId") String empId) {
			List<AppliedJobModel> ls=repo.findByEmployeeId(empId);
			List<AppliedJobModel> js=repo.findByJobId(job.getJobId());
			AppliedJobModel ajm=new AppliedJobModel();
			
			ajm.setJobId(job.getJobId());
			ajm.setEmployeeId(empId);
			   DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd");
			   LocalDateTime now = LocalDateTime.now();
			   String d=dtf.format(now);
			  ajm.setAppliedDate(d);
			  System.out.println(ls.size());
			if(ls.size()>=2)
				return ResponseEntity.ok(new Message("Cannot apply, max jobs are 2"));
			if(js.size()>=1)
				return ResponseEntity.ok(new Message("Job already applied"));
				
			repo.save(ajm);
			
			return ResponseEntity.ok(new Message("Job Applied"));
	}
	
	@GetMapping("appliedJobs/{employeeId}")
	public List<AppliedJobModel> showJobs(@PathVariable("employeeId") String id)
	{
		return repo.findByEmployeeId(id);
	}
	
	@DeleteMapping("/appliedJobs/delete/{employeeId}")
	public ResponseEntity<?> deleteMapping(@PathVariable("employeeId") String id) {
		repo.deleteByEmployeeId(id);
		return ResponseEntity.ok(new Message("Jobs Deleted"));
	}
}
