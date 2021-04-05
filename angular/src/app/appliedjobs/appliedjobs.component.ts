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
      this.route.navigate(['home',{data:this.empId}]);
    }
    
    appliedJobs(){
      this.route.navigate(['appliedJobs',{data:this.empId}]);
    }
  
    home(){
      this.route.navigate(['']);
    }
  
    
  ngOnInit(): void {
    this.router.paramMap.subscribe(params => { 
      this.empId = params.get('data'); 
      console.log(this.empId);
  });

    this.http.get("https://8080-cbdfdacebfddceccaadbdcabcbfcdccdeaa.examlyiopb.examly.io/appliedJobs/"+this.empId,{observe:'response'})
    .subscribe((res)=>{
       this.data = res.body;
    });
  }

  details(jobId:string,empId:string)
  {
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

  deleteJob(){
    this.http.delete("https://8080-cbdfdacebfddceccaadbdcabcbfcdccdeaa.examlyiopb.examly.io/appliedJobs/delete/"+this.empId)
      .subscribe((res)=>{
        
        alert("Jobs Deleted");
        window.location.reload();
      });
  }
  

}
