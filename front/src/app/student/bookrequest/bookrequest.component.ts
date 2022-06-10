import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {StudentService} from '../services/student.service';
import { LoginStudent} from '../models/login-student';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookrequest',
  templateUrl: './bookrequest.component.html',
  styleUrls: ['./bookrequest.component.css']
})
export class BookrequestComponent implements OnInit {

  requestForm : FormGroup;
  studentUser$:Subscription;
  user : LoginStudent;
  msg = "";
  
  @ViewChild('modalbtn', {static:false}) search: ElementRef;
  
  constructor(private studentservice:StudentService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      'name':new FormControl('',Validators['required']),
      'author':new FormControl('',Validators['required']),
      'category':new FormControl('',Validators['required']),
      'publication':new FormControl('',Validators['required'])
    });

    const id=localStorage.getItem("studentRollno");
    console.log(id);
    this.studentUser$=this.studentservice.getLoginStudent(id).subscribe(res => {
      this.user=res;
    },
    err=>{
      console.log(err);
    })
  }

  submitForm(){
    this.studentservice.requestBook(this.requestForm.value).subscribe(res => {
      console.log(res);
      this.msg="Your request has been successfully submitted."
      this.search.nativeElement.click();
    }, 
    err =>{
      console.log(err);
      this.msg="Some error has occured"
      this.search.nativeElement.click();
    })
    this.requestForm.reset();
  }

  logoutStudent(){
    localStorage.removeItem("tokenStudent");
    localStorage.removeItem("studentRollno");
    this.router.navigate(["/student"]);
  }
}
