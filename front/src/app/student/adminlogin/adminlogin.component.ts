import { Component, OnInit } from '@angular/core';
import {StudentService} from '../services/student.service'
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  loginAdmin:FormGroup;
  wrongeAdminId : boolean = false;
  wrongePassword : boolean = false;

  constructor(private studentservice:StudentService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginAdmin = this.fb.group({
      'employid':new FormControl('',[Validators.required]),
      'password':new FormControl('',[Validators.required])
    })
  }

  loginAdminData(){
    console.log(this.loginAdmin.value);
    this.studentservice.loginAdmin(this.loginAdmin.value).subscribe(res => {
      console.log(res);
      localStorage.setItem("tokenAdmin",res.token);
      localStorage.setItem("AdminEmployeeID",res.employid);
      this.loginAdmin.reset();
      this.router.navigate(['/admin']);
    },
    err=>{
      console.log(err.error.text);
      if(err.error.text == "No Employ ID is avilable"){
        this.wrongeAdminId = !this.wrongeAdminId;
      }

      if(err.error.text == "Password is wrong"){
        this.wrongePassword = !this.wrongePassword;
      }
    });
  }
}
