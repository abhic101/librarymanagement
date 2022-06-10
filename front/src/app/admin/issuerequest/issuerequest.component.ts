import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import { IssueRequest } from '../models/issuereq';
import {AdminService} from '../services/admin.service'

@Component({
  selector: 'app-issuerequest',
  templateUrl: './issuerequest.component.html',
  styleUrls: ['./issuerequest.component.css']
})
export class IssuerequestComponent implements OnInit {

  IssueReq$ : Observable<IssueRequest[]>

  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.IssueReq$ = this.adminservice.getIssueReq();
  }

  logoutAdmin(){
    this.adminservice.logoutAdmin();
  }
}
