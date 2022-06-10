import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Totalbooks} from '../../admin/models/totalbooks';
import {ViewService} from '../service/view.service';
import { AdminService } from 'src/app/admin/services/admin.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  totalBooks$ : Observable<Totalbooks[]>;

  constructor(private viewservice:ViewService,private adminservice:AdminService) { }

  ngOnInit(): void {
    this.totalBooks$ =  this.viewservice.getTotalBooks();
  }
  logoutAdmin(){
    this.adminservice.logoutAdmin();
  }
}
