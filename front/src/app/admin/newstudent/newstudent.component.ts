import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AdminService} from '../services/admin.service'

@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.css']
})
export class NewstudentComponent implements OnInit {

  newStudentForm : FormGroup
  @ViewChild('modalbtn', {static:false}) modalbtn: ElementRef;


  constructor(private adminservice:AdminService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.newStudentForm = this.fb.group({
      'firstname':new FormControl('',Validators['required']),
      'secondname':new FormControl('',Validators['required']),
      'email':new FormControl('',Validators['required']),
      'dateofbirth':new FormControl('',Validators['required']),
      'gender':new FormControl('',Validators['required']),
      'department':new FormControl('',Validators['required']),
      'year':new FormControl('',Validators['required']),
      'rollno':new FormControl('',Validators['required']),
      'password':new FormControl('',Validators['required']),
    })
  }

  formSubmit(){
    this.adminservice.registerNewStudent(this.newStudentForm.value).subscribe(res => {
      console.log(res);
      this.newStudentForm.reset();
      this.modalbtn.nativeElement.click();
    },
    err => {
      console.log(err);
    })
  }
  logoutAdmin(){
    this.adminservice.logoutAdmin();
  }

}
