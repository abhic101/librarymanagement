import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Totalbooks} from '../../admin/models/totalbooks';
import {ViewService} from '../service/view.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booksview',
  templateUrl: './booksview.component.html',
  styleUrls: ['./booksview.component.css']
})
export class BooksviewComponent implements OnInit {

  totaoBooks$ : Subscription;
  books : Totalbooks;
  showEditForm  : boolean = false;
  editBookForm : FormGroup

  constructor(private viewservice:ViewService,private activatedroute : ActivatedRoute,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.paramMap.get("id");
    this.viewservice.getBookById(id).subscribe(book =>{
      this.books = book;
    },
    err => {
      console.log(err);
    });

    this.editBookForm = this.fb.group({
      'name': new FormControl('',[Validators.required]),
      'pageno': new FormControl('',[Validators.required]),
      'author': new FormControl('',[Validators.required]),
      'category': new FormControl('',[Validators.required]),
      'price': new FormControl('',[Validators.required]),
      'publication': new FormControl('',[Validators.required]),
      'avilablenumber': new FormControl('',[Validators.required])
    })
  }

  showEdit(){
    this.showEditForm = !this.showEditForm;
  }

  editData(){
    const id = this.activatedroute.snapshot.paramMap.get("id");
    this.viewservice.updateBookById(id,this.editBookForm.value).subscribe(res => {
      console.log(res);
      this.editBookForm.reset();
      this.router.navigate(['/admin/view/books']);
    },
    err => {
      console.log(err);
    })
  }

  deleteData(){
    const id = this.activatedroute.snapshot.paramMap.get("id");
    this.viewservice.deleteBooksById(id).subscribe(res => {
      console.log(res);
      this.router.navigate(['/admin/view/books']);
    },
    err => {
      console.log(err);
    })
  }

}
