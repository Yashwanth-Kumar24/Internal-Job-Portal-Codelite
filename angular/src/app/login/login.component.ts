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
    this.http.get("http://localhost:4041/admin")
    .subscribe((res)=>{
      alert("Welcome Admin");
      this.router.navigate(['admin',{data:this.empId}]);
    });
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
  register(){
    this.router.navigate(['register']);
  }

}
