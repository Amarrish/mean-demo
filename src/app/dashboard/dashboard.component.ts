import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
fName:string=""
lName:string=""
desg:string=""
age:string=""
username:string=""
constructor(private dashboardService:DataService){
  this.username = dashboardService.loginUsername
}

update(){
  alert(`First name: ${this.fName}
  Last name: ${this.lName}
  Desigination: ${this.desg}
  Age: ${this.age} `)
}
}
