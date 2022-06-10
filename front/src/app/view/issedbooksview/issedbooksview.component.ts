import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {ViewService} from '../service/view.service';
import {Student} from '../../student/models/student';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-issedbooksview',
  templateUrl: './issedbooksview.component.html',
  styleUrls: ['./issedbooksview.component.css']
})
export class IssedbooksviewComponent implements OnInit {

  issedBook$ :Subscription;
  book : Student;
  issueBookForm : FormGroup;
  showForm : boolean = false;

  constructor(private viewservice:ViewService,private activatedroute:ActivatedRoute,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.paramMap.get("id");
    this.issedBook$ = this.viewservice.getIssuedBooksByID(id).subscribe(res => {
      this.book = res;
    },
    err => {
      console.log(err);
    });

    this.issueBookForm = this.fb.group({
      'name': new FormControl('',[Validators['required']]),
      'pageno': new FormControl('',[Validators['required']]),
      'author': new FormControl('',[Validators['required']]),
      'category': new FormControl('',[Validators['required']]),
      'rollno': new FormControl('',[Validators['required']]),
      'fromdate': new FormControl('',[Validators['required']]),
      'todate': new FormControl('',[Validators['required']]),
    })
  }

  formSubmit(){
    const id = this.activatedroute.snapshot.paramMap.get("id");
    this.viewservice.updateIssuedBooks(id,this.issueBookForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/admin']);
    },
    err => {
      console.log(err);
    })
  }

  showEditForm(){
    this.showForm = !this.showForm;
  }

  deleteIssuedBook(){
    const id = this.activatedroute.snapshot.paramMap.get("id");
    this.viewservice.deleteIssuedBooks(id).subscribe(res => {
      console.log(res);
      this.router.navigate(['/admin']);
    },
    err => {
      console.log(err);
    })
  }

}
