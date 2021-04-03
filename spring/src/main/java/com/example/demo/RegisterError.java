package com.example.demo;


public class RegisterError {
	private String empId;
	private String email;
	private String password;
	private String cpassword;
	private String mobileNumber;
	private Boolean department;
	private String role;
	private String userName;
	private String message;
	
	public RegisterError(String email, String password, String cpassword, String empId,
			String mobile_number, String role, String userName,String message) {
		super();
		this.empId=empId;
		this.email = email;
		this.password = password;
		this.cpassword = cpassword;
		this.empId = empId;
		this.mobileNumber = mobile_number;
		this.role = role;
		this.userName = userName;
		this.message=message;
	}
	

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getCpassword() {
		return cpassword;
	}
	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
	}
	public String getEmpId() {
		return empId;
	}
	public void setEmpId(String empId) {
		this.empId = empId;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public Boolean getDepartment() {
		return department;
	}
	public void setDepartment(Boolean department) {
		this.department = department;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}
		
}
