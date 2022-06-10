import { Component, OnInit } from '@angular/core';
import {StudentService} from '../services/student.service'
import {LoginStudent} from '../models/login-student'
import {Subscription} from 'rxjs'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  userLogin$:Subscription;
  student:LoginStudent;
  editForm:FormGroup;

  constructor(private studentservice:StudentService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    const rollno = localStorage.getItem("studentRollno");
    this.userLogin$=this.studentservice.getLoginStudent(rollno).subscribe((res)=>{
      this.student=res;
      console.log(this.student);
    },err=>{
      console.log(err);
    });

    this.editForm = this.fb.group({
      
      'firstname':new FormControl(),
      'secondname':new FormControl(),
      'email':new FormControl(),
      'dateofbirth':new FormControl(),
      'gender':new FormControl(),
      'department':new FormControl(),
      'year':new FormControl(),
      'rollno':new FormControl(),
    });
  }
  editFormSave(){
    const id=this.student._id;
    this.studentservice.editStudentDetail(id,this.editForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/student/dashbord']);
    },
    err=>{
      console.log(err);
    })
  }
}
