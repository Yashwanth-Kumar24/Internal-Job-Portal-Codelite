package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.EditEmployee;
import com.example.demo.Message;
import com.example.demo.model.EmployeeModel;
import com.example.demo.model.EmployeeModelDemo;
import com.example.demo.model.JobModel;

import com.example.demo.repository.JobRepository;

@RestController
@Transactional
@CrossOrigin("http://localhost/4200")
public class JobController {
	
	@Autowired
	JobRepository jobrepo;
	
	@PostMapping("/pm/addJob")
	public ResponseEntity<?> addJob(@RequestBody final JobModel job) {
		List<JobModel> jm=jobrepo.getJobs();
		int k=0;
		
		int id=200;
		if(jm.size()!=0) {
			k=Integer.parseInt(jm.get(jm.size()-1).getJobId());
			id=k+1;
			job.setJobId(String.valueOf(id));
		}
		
		else
			job.setJobId("200");
		jobrepo.save(job);
		return  ResponseEntity.ok(new Message("Job added with id "+job.getJobId()));
	}
	
	@GetMapping("/hr/getJob/{jobId}")
	public List<JobModel> getJobById(@PathVariable("jobId") String id) {
		return jobrepo.findByJobId(id);
	}
	
	@GetMapping("/hr/homeJobs")
	public List<JobModel> getHomeJobs(){
		return jobrepo.getHomeJobs();
	}
	
		
}
