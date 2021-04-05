import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { parseJsonText } from 'typescript';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email!:string;
  password!:string;
  mobileNumber!:string;
  userName!:string;
  cpassword!:string;
  user:any=[];
  status:number=0;

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  loginPage(){
    this.router.navigate(['']);
  }
  Signup(){
    
    var obs = this.http.post("https://8080-cbdfdacebfddceccaadbdcabcbfcdccdeaa.examlyiopb.examly.io/Register",{email:this.email,userName:this.userName,mobileNumber:this.mobileNumber,password:this.password,cpassword:this.cpassword},{observe:'response'})
    obs.subscribe((res)=>{
      this.user=res.body;
      console.log(this.user);
      
      if(this.user.email==("User with this emailID already exists"))
          alert("User with this emailID already exists");
      else if(this.user.email==("Please enter valid emailID"))
      alert("Please enter valid emailID");
      else if(this.user.mobileNumber==("Mobile number must be a valid 10 digit number"))
      alert("Mobile number must be a valid 10 digit number")
      else if(this.user.message==("Confirm password must be same as password"))
      alert("Confirm password must be same as password");
      else if(this.user.message==("Error occured."))
      alert("Please check details");
      else{
        alert(this.user.message);
        this.status=1;
      }
      
      


        if(this.status==1){
          alert("Registered Successfully");
          this.router.navigate(['']);
        }
        else{
          alert("Try again");
        }
    });
  
  }
}
