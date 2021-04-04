import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router:Router,private http:HttpClient) { }
  empId!:string;
  password!:String;
  ngOnInit(): void {
  }
  login(){

    if(this.empId=="admin" && this.password=="admin")
    {
      this.addAdmin();
      alert("Welcome Admin");

      this.router.navigate(['admin']);
    }
    else if(this.empId=="projectmanager" && this.password=="pm"){
      this.projectManager();
      alert("Welcome Project Manager");

      this.router.navigate(['projectmanager']);
    
    }
    else if(this.empId=="HR" && this.password=="hr"){
      this.hr();
      alert("Welcome HR");

      this.router.navigate(['hr']);
    
    }
    else{
      this.http.post("http://localhost:4041/Login",{empId:this.empId,password:this.password}
      ,{observe:'response'})
      .subscribe((res)=>{
        
         if(res.body==true){
          this.router.navigate(['home',{data:this.empId}]);
         }
         else  
            alert("Invalid Credentials");
      });
    }
      
  }

  addAdmin(){
        this.http.post("http://localhost:4041/admin/add/",
        {email:"admin@job.in",userName:"Admin",password:"admin",role:"Admin"},{observe:'response'})
        .subscribe((res)=>{
          console.log(res.body);
        });
        
      }
      projectManager(){
        this.http.post("http://localhost:4041/admin/add/",
        {email:"pm@job.in",userName:"Project Manager",password:"pm",role:"Project Manager"},{observe:'response'})
        .subscribe((res)=>{
          console.log(res.body);
        });
        
      }

      hr(){
        this.http.post("http://localhost:4041/admin/add/",
        {email:"hr@job.in",userName:"HR",password:"hr",role:"HR"},{observe:'response'})
        .subscribe((res)=>{
          console.log(res.body);
        });
        
      }

  register(){
    this.router.navigate(['register']);
  }

}
