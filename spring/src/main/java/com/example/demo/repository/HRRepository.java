package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.HRModel;

public interface HRRepository extends JpaRepository<HRModel,Integer> {
	
	void deleteByJobId(String JobId);
	
	HRModel findByJobId(String jobId);

}
