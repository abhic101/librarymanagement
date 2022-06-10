import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {LoginStudent} from '../models/login-student';
import {StudentService} from '../services/student.service'
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  constructor(private studentservice:StudentService,private fb:FormBuilder) { }

  viewForm:FormGroup;

  studentProfile$ :Subscription;
  student:LoginStudent;

  ngOnInit(): void {
    const rollno = localStorage.getItem("studentRollno")
    this.studentProfile$ = this.studentservice.getLoginStudent(rollno).subscribe(res =>{
      this.student = res;
      console.log(`the student is  ${res}`);
    },err=>{
      console.log(err);
    });
    this.viewForm= this.fb.group({
      'firstname':new FormControl(''),
      'secondname':new FormControl(''),
      'email':new FormControl(''),
      'dateofbirth':new FormControl(''),
      'gender':new FormControl(''),
      'department':new FormControl(''),
      'year':new FormControl(''),
      'rollno':new FormControl(''),
    })
  }

}
