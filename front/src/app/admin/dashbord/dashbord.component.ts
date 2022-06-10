import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service'

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  
  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
  }

  logoutAdmin(){
    this.adminservice.logoutAdmin();
  }

}
