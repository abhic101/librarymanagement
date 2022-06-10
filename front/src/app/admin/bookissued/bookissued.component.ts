import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {Student} from '../../student/models/student'
import {AdminService} from '../services/admin.service'

@Component({
  selector: 'app-bookissued',
  templateUrl: './bookissued.component.html',
  styleUrls: ['./bookissued.component.css']
})
export class BookissuedComponent implements OnInit {

  bookIssued$ : Observable<Student[]>

  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.bookIssued$ = this.adminservice.getBookIssued();
  }

}
