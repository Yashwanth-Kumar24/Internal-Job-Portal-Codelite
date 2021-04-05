import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectmanagerhome',
  templateUrl: './projectmanagerhome.component.html',
  styleUrls: ['./projectmanagerhome.component.css']
})
export class ProjectmanagerhomeComponent implements OnInit {

  constructor(private route:Router,private http:HttpClient) { }
  data:any=[];
  jobData:any=[];
  temp:any;
  jobTitle:string="";
  jobLocation!:string;
  jobType!:string;
  jobDesc!:string;
  salary!:string;
  jobId:string="";

  ngOnInit(): void {
    this.http.get("https://8080-cbdfdacebfddceccaadbdcabcbfcdccdeaa.examlyiopb.examly.io/hr",{observe:'response'})
    .subscribe((res)=>{
       this.data = res.body;
    });
  }

  projectmanager(){
    this.route.navigate(['projectmanager']);
  }
  
  appliedJobs(){
    this.route.navigate(['projectmanager/appliedJobs']);
  }

  home(){
    this.route.navigate(['']);
  }
  
  
  addJob(){
    
    this.http.post("https://8080-cbdfdacebfddceccaadbdcabcbfcdccdeaa.examlyiopb.examly.io/pm/addJob/",{jobTitle:this.jobTitle,jobLocation:this.jobLocation,jobDesc:this.jobDesc,
  jobType:this.jobType,salary:this.salary,},{observe:'response'})
    .subscribe((res)=>{
       this.jobData =res.body;
       
       alert(this.jobData.message);
       window.location.reload();
    });
  }

  

}
