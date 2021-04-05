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

import com.example.demo.AddJobById;
import com.example.demo.EditEmployee;
import com.example.demo.Message;
import com.example.demo.model.AppliedJobModel;
import com.example.demo.model.EmployeeModelDemo;
import com.example.demo.model.HRModel;
import com.example.demo.model.JobModel;
import com.example.demo.repository.AppliedJobRepository;
import com.example.demo.repository.HRRepository;
import com.example.demo.repository.JobRepository;

@RestController
@Transactional
@CrossOrigin("http://localhost/8081")
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
	
	
	@PostMapping("/hr/addJob")             
	public ResponseEntity<?> addJob(@RequestBody AddJobById addjob) {
		String id=addjob.getId();
		HRModel hrm=hrrepo.findByJobId(id);
		List<HRModel> h=hrrepo.findAll();
		if(hrm!=null)
		
		if(hrm!=null) {
			return ResponseEntity.ok(new Message("Already Added"));
		}
		
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
		return ResponseEntity.ok(new Message("Job Added"));
	}
	
	@PutMapping("hr/jobEdit/{jobId}")
	public ResponseEntity<?> jobsEditSave(@RequestBody final HRModel job,@PathVariable("jobId") String id) {
		JobModel jm=jobrepo.getJobById(id);
		
		if(jm!=null) {
			System.out.println("Im here");
			jm.setSalary(job.getSalary());
			jm.setJobDesc(job.getJobDesc());
			jm.setJobTitle(job.getJobTitle());
			jm.setJobType(job.getJobType());
			
			jm.setJobLocation(job.getJobLocation());
		
		return ResponseEntity.ok(new Message("Job Updated"));
		}
		List<JobModel> jbm=jobrepo.getJobs();
		int k=0;
		JobModel jobnew=new JobModel();
		int ids=200;
		System.out.println(jbm.size());
		if(jbm.size()!=0) {
			k=Integer.parseInt(jbm.get(jbm.size()-1).getJobId());
			ids=k+1;
			jobnew.setJobId(String.valueOf(ids));
		}
		else
			jobnew.setJobId("200");
		
		jobnew.setSalary(job.getSalary());
		jobnew.setJobDesc(job.getJobDesc());
		jobnew.setJobTitle(job.getJobTitle());
		jobnew.setJobType(job.getJobType());
		jobnew.setJobLocation(job.getJobLocation());
		jobrepo.save(jobnew);
	
	return ResponseEntity.ok(new Message("Job Added"));
		
	}
	
	@GetMapping("/hr/jobEdit/{jobId}")
	public JobModel jobEditData(@PathVariable("jobId") String id) {
		return jobrepo.getJobById(id);
	}
	
	
	@DeleteMapping("/hr/delete/{jobId}")
	public ResponseEntity<?> jobDelete(@PathVariable("jobId") String id) {
		jobrepo.deleteByJobId(id);
		hrrepo.deleteByJobId(id);
			return ResponseEntity.ok(new Message("Job Deleted"));	
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
