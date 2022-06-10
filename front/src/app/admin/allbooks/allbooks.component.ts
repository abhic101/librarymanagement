import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Totalbooks} from '../models/totalbooks';
import {AdminService} from '../services/admin.service'

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {

  totalBook$ : Observable<Totalbooks[]>

  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.totalBook$ = this.adminservice.getTotalBooks();
  }

}
