import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Student} from '../models/student'
import {StudentService} from '../services/student.service';
import { Subscription } from 'rxjs';
import { LoginStudent} from '../models/login-student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  books$ : Observable<Student[]>
  studentUser$:Subscription;
  user : LoginStudent;
  arr = [10,20,30];
  
  constructor(private studentservice:StudentService,private router:Router) { }

  ngOnInit(): void {
    const id=localStorage.getItem("studentRollno");
    console.log(id);
    this.books$=this.studentservice.getStudentBooks(id);
    this.studentUser$=this.studentservice.getLoginStudent(id).subscribe(res => {
      this.user=res;
    },
    err=>{
      console.log(err);
    })
    console.log(this.arr[0]);
  }

  logoutStudent(){
    localStorage.removeItem("tokenStudent");
    localStorage.removeItem("studentRollno");
    this.router.navigate(["/student"]);
  }
}
