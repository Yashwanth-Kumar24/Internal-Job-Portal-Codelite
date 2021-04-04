import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectmanagerappliedjobs',
  templateUrl: './projectmanagerappliedjobs.component.html',
  styleUrls: ['./projectmanagerappliedjobs.component.css']
})
export class ProjectmanagerappliedjobsComponent implements OnInit {
  data:any=[];
  jobData:any=[];
  empData:any=[];
  empName!:string;
  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:4041/hr/allAppliedJobs",{observe:'response'})
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
  details(jobId:string,empId:string){
    console.log(jobId);
    this.http.get("http://localhost:4041/hr/getJob/"+jobId,{observe:'response'})
    .subscribe((res)=>{
      //console.log(res.body);
       this.jobData=res.body;
       
    });
    //console.log(empId);
    this.http.get("http://localhost:4041/getEmployee/"+empId,{observe:'response'})
    .subscribe((res)=>{
      //onsole.log(res.body);
      this.empData=res.body;
       this.empName=this.empData[0].userName;
      // console.log(this.empName);
    });
}
}
