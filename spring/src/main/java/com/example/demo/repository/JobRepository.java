package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.JobModel;


public interface JobRepository extends JpaRepository<JobModel,Integer> {
	
	
	List<JobModel> findByJobId(String jobId);
	
	@Query("from JobModel")
	List<JobModel> getJobs();
	
	@Query("from JobModel where jobId=?1")
	JobModel getJobById(String jobId);
	
	void deleteByJobId(String JobId);
	
	
	@Query("from JobModel where jobLocation='Home'")
	List<JobModel> getHomeJobs();
}
