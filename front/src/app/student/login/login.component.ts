import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {StudentService} from '../services/student.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  studentLoginForm:FormGroup;
  wrongeUserName:boolean = false;
  wrongePassword:Boolean = false;

  constructor(private fb:FormBuilder,private studentservice:StudentService,private route:Router) { }

  ngOnInit(): void {
    this.studentLoginForm = this.fb.group({
      'rollno' : new FormControl('',[Validators.required]),
      'password' : new FormControl('',[Validators.required])
    });
  }

  loginStudent(){
    this.studentservice.loginStudent(this.studentLoginForm.value).subscribe((res)=>{
      console.log(res);
      localStorage.setItem("tokenStudent",res.token);
      localStorage.setItem("studentRollno",res.rollno);
      this.studentLoginForm.reset();
      this.route.navigate(['/student/dashbord']);
    },(err)=>{
      console.log(err.error);
      if(err.error.text == "No Univesty RollNumber is avilable"){
        this.wrongeUserName = !this.wrongeUserName;
      }

      if(err.error.text == "Password is wrong"){
        this.wrongePassword = !this.wrongePassword;
      }
    })
  }

}
