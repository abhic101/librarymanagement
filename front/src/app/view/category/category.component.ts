import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {CategoryBooks} from '../../admin/models/category-books';
import {ViewService} from '../service/view.service';
import { AdminService } from 'src/app/admin/services/admin.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryBooks$ : Observable<CategoryBooks[]>



  constructor(private viewservice:ViewService,private adminservice:AdminService) { }

  ngOnInit(): void {
    this.categoryBooks$= this.viewservice.getCategoryBooks();
  }
  logoutAdmin(){
    this.adminservice.logoutAdmin();
  }
}
