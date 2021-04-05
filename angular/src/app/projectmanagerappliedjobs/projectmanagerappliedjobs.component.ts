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
    this.http.get("https://8080-cbdfdacebfddceccaadbdcabcbfcdccdeaa.examlyiopb.examly.io/hr/allAppliedJobs",{observe:'response'})
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
    localStorage.clear();
      localStorage.setItem("SessionUse","0");
   
      this.route.navigate(['']);
  }

  details(jobId:string,empId:string){
    console.log(jobId);
    this.http.get("https://8080-cbdfdacebfddceccaadbdcabcbfcdccdeaa.examlyiopb.examly.io/hr/getJob/"+jobId,{observe:'response'})
    .subscribe((res)=>{
      //console.log(res.body);
       this.jobData=res.body;
       
    });
    //console.log(empId);
    this.http.get("https://8080-cbdfdacebfddceccaadbdcabcbfcdccdeaa.examlyiopb.examly.io/getEmployee/"+empId,{observe:'response'})
    .subscribe((res)=>{
      //onsole.log(res.body);
      this.empData=res.body;
       this.empName=this.empData[0].userName;
      // console.log(this.empName);
    });
}
}
