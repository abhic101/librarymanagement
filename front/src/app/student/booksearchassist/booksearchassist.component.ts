import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-booksearchassist',
  templateUrl: './booksearchassist.component.html',
  styleUrls: ['./booksearchassist.component.css']
})
export class BooksearchassistComponent implements OnInit {

  reqBookForm : FormGroup;

  constructor(private studentservice:StudentService,private fb:FormBuilder,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.reqBookForm = this.fb.group({
      'student':this.activatedroute.snapshot.paramMap.get("student"),
      'book':this.activatedroute.snapshot.paramMap.get("book")
    })
    this.studentservice.issuerequest(this.reqBookForm.value).subscribe(res => {
      console.log(res);
      setTimeout(() => {
        this.router.navigate(['student/booksearch'])
      }
      , 1000);
    },
    err => {
      console.log(err);
    })
  }
}
