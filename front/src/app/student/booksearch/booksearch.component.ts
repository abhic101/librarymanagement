import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Totalbooks} from '../models/totalbooks';
import {StudentService} from '../services/student.service';
import { LoginStudent} from '../models/login-student';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit {
  totalBook$ : Observable<Totalbooks[]>
  studentUser$:Subscription;
  user : LoginStudent;

  constructor(private studentservice:StudentService,private router:Router) { }

  ngOnInit(): void {
    this.totalBook$ = this.studentservice.getTotalBooks();

    const id=localStorage.getItem("studentRollno");
    console.log(id);
    this.studentUser$=this.studentservice.getLoginStudent(id).subscribe(res => {
      this.user=res;
    },
    err=>{
      console.log(err);
    })
  }

  logoutStudent(){
    localStorage.removeItem("tokenStudent");
    localStorage.removeItem("studentRollno");
    this.router.navigate(["/student"]);
  }

}
