import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hrappliedjobs',
  templateUrl: './hrappliedjobs.component.html',
  styleUrls: ['./hrappliedjobs.component.css']
})
export class HrappliedjobsComponent implements OnInit {

  constructor(private route:Router,private http:HttpClient) { }
  data:any=[];
  jobData:any=[];
  empData:any=[];
  empName!:string;
  ngOnInit(): void {
    this.http.get("http://localhost:4041/hr/allAppliedJobs",{observe:'response'})
    .subscribe((res)=>{
       this.data = res.body;
       
    });
  }

  hr(){
    this.route.navigate(['hr']);
  }
  
  appliedJobs(){
    this.route.navigate(['hr/allAppliedJobs']);
  }

  home(){
    localStorage.clear();
      localStorage.setItem("SessionUse","0");
   
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
