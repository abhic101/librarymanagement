import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {CategoryBooks} from '../models/category-books';
import {AdminService} from '../services/admin.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryBooks$ : Observable<CategoryBooks[]>;

  constructor(private adminservice : AdminService) { }

  ngOnInit(): void {
    this.categoryBooks$ = this.adminservice.getCategoryBooks();
  }

}
