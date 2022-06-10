import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {CategoryBooks} from '../../admin/models/category-books';
import {ViewService} from '../service/view.service'
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoryview',
  templateUrl: './categoryview.component.html',
  styleUrls: ['./categoryview.component.css']
})
export class CategoryviewComponent implements OnInit {

  categoryBook$ : Subscription;

  book : CategoryBooks

  editCategoryForm : FormGroup;
  showEdit:boolean = false;

  constructor(private viewservice:ViewService,private activatedroute:ActivatedRoute,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.paramMap.get("id");
    this.categoryBook$ = this.viewservice.getCategoryById(id).subscribe(res => {
      this.book = res;
    },
    err => {
      console.log(err);
    });

    this.editCategoryForm = this.fb.group({
      'category':new FormControl('',[Validators.required])
    })
  }

  showEditForm(){
    this.showEdit = !this.showEdit;
  }

  editCategory(){
    const id = this.activatedroute.snapshot.paramMap.get("id");
    this.viewservice.updateCategory(id,this.editCategoryForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/admin']);
    },
    err => {
      console.log(err);
    })
  }

  deleteCategory(){
    const id = this.activatedroute.snapshot.paramMap.get("id");
    this.viewservice.deleteCategory(id).subscribe(res => {
      console.log(res);
      this.router.navigate(['/admin']);
    },
    err => {
      console.log(err);
    })
    
  }

}
