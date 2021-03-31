package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.EditEmployee;
import com.example.demo.model.AppliedJobModel;
import com.example.demo.model.EmployeeModelDemo;
import com.example.demo.model.HRModel;
import com.example.demo.model.JobModel;
import com.example.demo.repository.AppliedJobRepository;
import com.example.demo.repository.HRRepository;
import com.example.demo.repository.JobRepository;

@RestController
@Transactional
public class HRController {
	
	@Autowired
	JobRepository jobrepo;
	
	@Autowired
	HRRepository hrrepo;
	
	@Autowired
	AppliedJobRepository appliedjobrepo;
	
	
	@GetMapping("/hr")
	public List<JobModel> getJobs(){
		return jobrepo.getJobs();
	}
	
	
	@PostMapping("/hr/addJob/{jobId}")             //post mapping job id to be sent from req body
	public HRModel addJob(@PathVariable("jobId") String id) {
		
		JobModel jm=jobrepo.getJobById(id);
		HRModel hm=new HRModel();
		hm.setSalary(jm.getSalary());
		hm.setJobDesc(jm.getJobDesc());
		hm.setJobTitle(jm.getJobTitle());
		hm.setJobType(jm.getJobType());
		hm.setJobId(jm.getJobId());
		hm.setId(0);
		hm.setJobLocation(jm.getJobLocation());
		hrrepo.save(hm);
		
		return hm;
	}
	
	@PutMapping("hr/jobEdit/{jobId}")
	public HRModel jobsEditSave(@RequestBody final HRModel job,@PathVariable("jobId") String id) {
		JobModel jm=jobrepo.getJobById(id);
		hrrepo.deleteByJobId(id);
		HRModel hm=new HRModel();
		hm.setSalary(job.getSalary());
		hm.setJobDesc(job.getJobDesc());
		hm.setJobTitle(job.getJobTitle());
		hm.setJobType(job.getJobType());
		hm.setJobId(jm.getJobId());
		hm.setJobLocation(job.getJobLocation());
		hrrepo.save(hm);
		
		return hm;
	}
	
	@GetMapping("/hr/jobEdit/{jobId}")
	public JobModel jobEditData(@PathVariable("jobId") String id) {
		return jobrepo.getJobById(id);
	}
	
	
	@DeleteMapping("/hr/delete/{jobId}")
	public String jobDelete(@PathVariable("jobId") String id) {
		hrrepo.deleteByJobId(id);
			return "Job deleted";	
	}
	
	@GetMapping("/home")
	public List<HRModel> getAllJobs(){
		return hrrepo.findAll();
	}
	
	@GetMapping("/hr/allAppliedJobs")
	public List<AppliedJobModel> getAppliedJobs(){
		return appliedjobrepo.findAll();
	}

}
