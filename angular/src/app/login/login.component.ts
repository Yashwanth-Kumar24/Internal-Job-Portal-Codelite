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
  loginstatus:string = "0";
  ngOnInit(): void {
  }
  login(){

    if(this.empId=="admin" && this.password=="admin")
    {
      this.addAdmin();
      alert("Welcome Admin");
      localStorage.setItem("SessionUse","1");
      this.router.navigate(['admin']);
    }
    else if(this.empId=="projectmanager" && this.password=="pm"){
      this.projectManager();
      alert("Welcome Project Manager");
      localStorage.setItem("SessionUse","1");
      this.router.navigate(['projectmanager']);
    
    }
    else if(this.empId=="HR" && this.password=="hr"){
      this.hr();
      alert("Welcome HR");
      localStorage.setItem("SessionUse","1");
      this.router.navigate(['hr']);
    
    }
    else{
      this.http.post("https://8080-cbdfdacebfddceccaadbdcabcbfcdccdeaa.examlyiopb.examly.io/Login",{empId:this.empId,password:this.password}
      ,{observe:'response'})
      .subscribe((res)=>{
        
         if(res.body==true){
           this.loginstatus="1";
           localStorage.setItem("empId",this.empId);
          
         }
         else  {
           this.loginstatus="0";
            alert("Invalid Credentials");
         }
      });
      localStorage.setItem("SessionUse",this.loginstatus);
      this.router.navigate(['home']);
    }
      
  }

  addAdmin(){
        this.http.post("https://8080-cbdfdacebfddceccaadbdcabcbfcdccdeaa.examlyiopb.examly.io/admin/add/",
        {email:"admin@job.in",userName:"Admin",password:"admin",role:"Admin"},{observe:'response'})
        .subscribe((res)=>{
          console.log(res.body);
        });
        
      }
      projectManager(){
        this.http.post("https://8080-cbdfdacebfddceccaadbdcabcbfcdccdeaa.examlyiopb.examly.io/admin/add/",
        {email:"pm@job.in",userName:"Project Manager",password:"pm",role:"Project Manager"},{observe:'response'})
        .subscribe((res)=>{
          console.log(res.body);
        });
        
      }

      hr(){
        this.http.post("https://8080-cbdfdacebfddceccaadbdcabcbfcdccdeaa.examlyiopb.examly.io/admin/add/",
        {email:"hr@job.in",userName:"HR",password:"hr",role:"HR"},{observe:'response'})
        .subscribe((res)=>{
          console.log(res.body);
        });
        
      }

  register(){
    this.router.navigate(['register']);
  }

}
