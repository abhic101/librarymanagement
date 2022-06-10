import { Component, OnInit } from '@angular/core';
import {Authors} from '../../admin/models/authors';
import { Observable } from 'rxjs';
import {ViewService} from '../service/view.service';
import { AdminService } from 'src/app/admin/services/admin.service'

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors$ : Observable<Authors[]>

  constructor(private viewservice:ViewService,private adminservice:AdminService) { }

  ngOnInit(): void {
    this.authors$ = this.viewservice.getAuthors();
  }
  logoutAdmin(){
    this.adminservice.logoutAdmin();
  }
}
