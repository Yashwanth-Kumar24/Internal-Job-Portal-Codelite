import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HomeInterface, HomeserviceService } from '../homeservice/homeservice.service';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

  emps: Array<HomeInterface> = [];
  data:any=[];
  messageData:any=[];
  
  emp! : HomeInterface;
  empId!:any;

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

    this.http.get("http://localhost:4041/home",{observe:'response'})
    .subscribe((res)=>{
       this.data = res.body;
       
       
    });
  }

  addJob(jobId:string){
    this.http.post("http://localhost:4041/home/"+this.empId,{jobId:jobId},{observe:'response'})
      .subscribe((res)=>{
        this.data=res.body;
        console.log(res);
        this.messageData=this.data;
        
        alert(this.messageData.message);
      });
  }


  

  

}
