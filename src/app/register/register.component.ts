import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private regRouter:Router){}

  register(uname:any,password:any){
    alert(`Username: ${uname.value},Password: ${password.value}`);
    //navigate to login page-navigateByurl(path) method -define class Router
    this.regRouter.navigateByUrl("")
  }
}
// 1.create dashbord component
// 2.set path for dashboard
// 3.design dashboard with a form having following detail (fname, lname, desigination, age)
// 4. when login clicked redirect to dashboard