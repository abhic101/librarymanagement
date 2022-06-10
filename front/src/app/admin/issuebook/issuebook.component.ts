import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AdminService} from '../services/admin.service';
import { Totalbooks } from '../models/totalbooks';
import { Observable } from 'rxjs';
import { Registerstudent } from '../models/registerstudent';

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent implements OnInit {

  books$: Observable<Totalbooks[]>;
  students$: Observable<Registerstudent[]>;
  issueBookForm : FormGroup;

  @ViewChild('modalbtn') modalbtn: ElementRef;

  constructor(private adminservice:AdminService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.books$ = this.adminservice.getTotalBooks();
    this.students$ = this.adminservice.getAllRegisterStudent();
    this.issueBookForm = this.fb.group({
      'name':new FormControl('',Validators['required']),
      'author':new FormControl('',Validators['required']),
      'category':new FormControl('',Validators['required']),
      'pageno':new FormControl('',Validators['required']),
      'rollno':new FormControl('',Validators['required']),
      'fromdate':new FormControl('',Validators['required']),
      'todate':new FormControl('',Validators['required']),
      'thumbnail':new FormControl('',Validators['required']),
    })
  }

  formSubmit(){
    this.adminservice.issueBooks(this.issueBookForm.value).subscribe(res => {
      console.log(res);
      this.issueBookForm.reset();
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
