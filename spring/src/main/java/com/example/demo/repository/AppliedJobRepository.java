package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.AppliedJobModel;

public interface AppliedJobRepository extends JpaRepository<AppliedJobModel,Integer> {
	
	List<AppliedJobModel> findByEmployeeId(String EmployeeId);
	List<AppliedJobModel> findByJobId(String JobId);
	
	@Query("from AppliedJobModel where jobId=?1 and employeeId=?2")
	AppliedJobModel deleteJobsById(String jobId, String employeeId);
	
	@Query("from AppliedJobModel where jobId=?1 and employeeId=?2")
	List<AppliedJobModel> deleteJobsById2(String jobId, String employeeId);
	
	void deleteByEmployeeId(String employeeId);
}
