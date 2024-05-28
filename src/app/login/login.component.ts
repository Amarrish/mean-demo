import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
//property
title:string = "Login Form"
imgurl:string= "https://static.prod01.ue1.p.pcomm.net/blackbaud/user_content/photos/000/006/6783/a6132a5cd55abcae190bc82567ca8a47-original-users.png"
username:string=""
password:string=""
//constructor
constructor(private logRouter:Router,private loginService:DataService){}

//user defined functions
usernamechange(event:any){
  console.log("Username: ",event.target.value);
  this.username = event.target.value
}
pswdchange(event:any){
  console.log("Password: ",event.target.value);
  this.password = event.target.value
}
login(){
  if(this.username && this.password){
    this.loginService.loginUsername = this.username
    alert(`Usename: ${this.username}, Password: ${this.password}`)
    this.logRouter.navigateByUrl("dashboard")
  }else{
    alert("Please fill the form completely")
  }
}
}
