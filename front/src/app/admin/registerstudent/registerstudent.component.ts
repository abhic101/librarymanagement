import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {Registerstudent} from '../models/registerstudent';
import {AdminService} from '../services/admin.service';

@Component({
  selector: 'app-registerstudent',
  templateUrl: './registerstudent.component.html',
  styleUrls: ['./registerstudent.component.css']
})
export class RegisterstudentComponent implements OnInit {

  registerStudent$ : Observable<Registerstudent[]>

  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.registerStudent$ = this.adminservice.getAllRegisterStudent();
  }

}
