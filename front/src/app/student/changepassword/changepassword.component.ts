import { Component, OnInit } from '@angular/core';
import {LoginStudent} from '../models/login-student';
import {Subscription} from 'rxjs';
import {StudentService} from '../services/student.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  userLogin$:Subscription;
  student:LoginStudent;
  changePasswordForm:FormGroup;

  constructor(private studentservice:StudentService,private fb:FormBuilder) { }

  ngOnInit(): void {
    const rollno = localStorage.getItem("studentRollno");
    this.userLogin$=this.studentservice.getLoginStudent(rollno).subscribe((res)=>{
      this.student=res;
      console.log(this.student);
    },err=>{
      console.log(err);
    });

    this.changePasswordForm = this.fb.group({
      'presentpassword':new FormControl(),
      'newpassword':new FormControl(),
      'conformpassword':new FormControl()
    });
  }

  savePassword(){
    const id=this.student._id;
    const presentPassword=this.changePasswordForm.value.presentpassword;
    const newPassword=this.changePasswordForm.value.newpassword;
    const conformPassword=this.changePasswordForm.value.conformpassword;

    if(presentPassword == this.student.password){
        if(newPassword == conformPassword){
          console.log(this.changePasswordForm.value);
          this.studentservice.changePasswordStudent(id,{password:newPassword}).subscribe(res=>{
            console.log(res);
            this.changePasswordForm.reset();
          },
          err=>{
            console.log(err);
          })
        }
    }
    else{
      console.log("errrrr");
    }

  }

}
