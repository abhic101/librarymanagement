import { Component, OnInit } from '@angular/core';
import {Student} from '../../student/models/student'
import { Observable } from 'rxjs';
import {ViewService} from '../service/view.service';
import { AdminService } from 'src/app/admin/services/admin.service'

@Component({
  selector: 'app-issedbooks',
  templateUrl: './issedbooks.component.html',
  styleUrls: ['./issedbooks.component.css']
})
export class IssedbooksComponent implements OnInit {

  issedBooks$ : Observable<Student[]>

  constructor(private viewsevice:ViewService,private adminservice:AdminService) { }

  ngOnInit(): void {
    this.issedBooks$ = this.viewsevice.getIssuedBooks();
  }
  logoutAdmin(){
    this.adminservice.logoutAdmin();
  }
}
