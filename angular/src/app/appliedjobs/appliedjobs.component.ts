import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appliedjobs',
  templateUrl: './appliedjobs.component.html',
  styleUrls: ['./appliedjobs.component.css']
})
export class AppliedjobsComponent implements OnInit {

  data:any=[];
  messageData:any=[];
  jobData:any=[]
  empData:any=[];
  empName!:string;
  empId!:any;
  delData:any=[];
  constructor(private router: ActivatedRoute,private route:Router,private http:HttpClient) { }

    userHome(){
      this.route.navigate(['home']);
    }
    
    appliedJobs(){
      this.route.navigate(['appliedJobs']);
    }
  
    home(){
    localStorage.clear();
      localStorage.setItem("SessionUse","0");
   
      this.route.navigate(['']);
  }

  
    
  ngOnInit(): void {
    
      this.empId = localStorage.getItem("empId");
    this.http.get("http://localhost:4041/appliedJobs/"+this.empId,{observe:'response'})
    .subscribe((res)=>{
       this.data = res.body;
    });
  }

  details(jobId:string,empId:string)
  {
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

  deleteJob(){
    this.http.delete("http://localhost:4041/appliedJobs/delete/"+this.empId)
      .subscribe((res)=>{
        
        alert("Jobs Deleted");
        window.location.reload();
      });
  }
  

}
