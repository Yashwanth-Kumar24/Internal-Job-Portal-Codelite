import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hrhome',
  templateUrl: './hrhome.component.html',
  styleUrls: ['./hrhome.component.css']
})
export class HrhomeComponent implements OnInit {

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
    this.http.get("http://localhost:4041/hr",{observe:'response'})
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

  
  addJob(id:any){
    console.log(id);
    this.http.post("http://localhost:4041/hr/addJob/",{id:id},{observe:'response'})
    .subscribe((res)=>{
       this.jobData =res.body;
       
       alert(this.jobData.message);
       window.location.reload();
    });
  }

  deleteJob(id:any){
    this.http.delete("http://localhost:4041/hr/delete/"+id,{observe:'response'})
    .subscribe((res)=>{
       this.jobData =res.body;
       console.log(this.jobData.message);
       alert("Job Deleted");
       window.location.reload();
    });
  }
  
  editJob(jobId:any){
    
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].jobId==jobId){
        this.temp=this.data[i];
          this.jobTitle=this.data[i].jobTitle;
          this.jobDesc=this.data[i].jobDesc;
          this.jobLocation=this.data[i].jobLocation;
          this.jobType=this.data[i].jobType;
          this.salary=this.data[i].salary;
          this.jobId=this.data[i].jobId;

          
      }
    
    
  }
  }
  updateJob(){
    if(this.jobId=="")
      this.jobId="1"
    this.http.put("http://localhost:4041/hr/jobEdit/"+this.jobId,{jobTitle:this.jobTitle,jobLocation:this.jobLocation,jobDesc:this.jobDesc,
  jobType:this.jobType,salary:this.salary,},{observe:'response'})
    .subscribe((res)=>{
       this.jobData =res.body;
       
       alert(this.jobData.message);
       window.location.reload();
    });
  }

  // cancelButton(){
  //   if(this.jobTitle!="" || this.jobDesc!="" || this.jobLocation!="" || this.jobType!="" || this.salary!=""){
  //     this.jobTitle=""
  //         this.jobDesc=""
  //         this.jobLocation=""
  //         this.jobType=""
  //         this.salary=""
  //         this.jobId=""
  //   this.data.push(this.temp);
  //   window.location.reload();
  //   }
  //   }
  

}
