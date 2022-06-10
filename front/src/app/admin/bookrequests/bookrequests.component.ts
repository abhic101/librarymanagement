import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { BookRequest } from '../models/bookrequest';
import {AdminService} from '../services/admin.service'

@Component({
  selector: 'app-bookrequests',
  templateUrl: './bookrequests.component.html',
  styleUrls: ['./bookrequests.component.css']
})
export class BookrequestsComponent implements OnInit {

  totalReq$ : Observable<BookRequest[]>

  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.totalReq$ = this.adminservice.getBookRequest();
  }

}
