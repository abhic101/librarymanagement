import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ViewService} from '../service/view.service';
import {Subscription} from 'rxjs';
import {Authors} from '../../admin/models/authors'
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authhorview',
  templateUrl: './authhorview.component.html',
  styleUrls: ['./authhorview.component.css']
})
export class AuthhorviewComponent implements OnInit {

  //const id = this.activatedroute.snapshot.paramMap.get("id");
  authorBook$ : Subscription
  author : Authors
  showEditForm : boolean = false;
  authorForm : FormGroup;

  constructor(private activatedroute:ActivatedRoute,private viewservice:ViewService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.paramMap.get("id");
    this.authorBook$ = this.viewservice.getAuthorById(id).subscribe(author => {
      this.author = author;
    },
    err => {
      console.log(err);
    });

    this.authorForm = this.fb.group({
      'author': new FormControl('',[Validators['required']])
    })
  
  }

  showEdit(){
    this.showEditForm = !this.showEditForm;
  }

  editAuthor(){
    const id = this.activatedroute.snapshot.paramMap.get("id");
    this.viewservice.updateAuthor(id,this.authorForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/admin']);
    },
    err => {
      console.log(err);
    })
  }

  deleteAuthor(){
    const id = this.activatedroute.snapshot.paramMap.get("id");
    this.viewservice.deleteAuthor(id).subscribe(res => {
      console.log(res);
      this.router.navigate(['/admin']);
    },
    err => {
      console.log(err);
    })
  }

}
