import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  data:any=[];
  d:any=[];
  temp:any;
  username!:string; 
  email!:string;
  empId!:string;
  password!:string;
  message:string="";
  role!:string;
  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:4041/admin",{observe:'response'})
    .subscribe((res)=>{
       this.data = res.body;
       this.username="";
       this.empId="";
       
    });
  }
  home(){
    this.route.navigate(['']);
  }
  adminPage(){
    this.route.navigate(['admin']);
  }
  adminhomeclick(){
      this.route.navigate(['adminHome']);
  }
  adminlogoutclick(){
    this.route.navigate(['login']);
  }
  updateclick(){
    if(this.empId=="")
      alert("Please select a user to update employee");
    else{
      this.http.put("http://localhost:4041/admin/update/"+this.empId,
      {email:this.email,userName:this.username,password:this.password,role:this.role},{observe:'response'})
      .subscribe((res)=>{
        alert("Update Details"+res.body);
      });
      this.email="";
      this.username="";
      this.empId="";
      this.password="";
      this.role="";
      console.log("clicked");
      window.location.reload();
    }
  }

  addClick(){
    
    if(this.username!="" && this.email!="" && this.password!="" && this.role!=""){
      this.http.post("http://localhost:4041/admin/add/",
      {email:this.email,userName:this.username,password:this.password,role:this.role},{observe:'response'})
      .subscribe((res)=>{
        this.d=res.body;
        alert("Employee "+this.d.message);
        window.location.reload();
      });
    }
    else{
      alert("Try again");
    }
  }
  deleteButton(empId:string){
    console.log(empId);
    this.http.delete("http://localhost:4041/admin/delete/"+empId)
    .subscribe((res)=>{
      this.message="Deleted Successfully";
      alert("Deleted Successfully")
    });
  }
  editButton(empId:string){
    let en,ep,em,er,eno;
    // if(this.username!="")
    //   alert("Cancel and try");
    // else{
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].empId==empId){
        this.temp=this.data[i];
          em = this.data[i].email;
          ep = this.data[i].password;
          en = this.data[i].userName;
          er = this.data[i].role;
          this.empId=this.data[i].empId;
          this.username = en;
          
          this.password = ep;
          this.role=er;
          this.email = em;
          // const filterArray = this.data.filter((item:any) => item.empId !== empId);
          // this.data = filterArray;
          
      }
    }
  
  }
    // cancelButton(){
    //   if(this.empId!=""){
    //   this.username = "";
    //       this.empId="";
    //       this.password = "";
    //       this.role="";
    //       this.email = "";
          
    // this.data.push(this.temp);  }
    // }
  

}
