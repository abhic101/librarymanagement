import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {Authors} from '../models/authors'
import {AdminService} from '../services/admin.service'

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author$ : Observable<Authors[]>;

  constructor(private adminservices:AdminService) { }

  ngOnInit(): void {
    this.author$ = this.adminservices.getAuthors();
  }

  IsLoggedIn(){
    this.adminservices.IsAdminLoggedIn();
  }

}
