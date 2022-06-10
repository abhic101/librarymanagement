import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {AddService} from '../services/add.service';
import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  Categoryform : FormGroup;

  constructor(private fb:FormBuilder,private addservices:AddService,private adminservice:AdminService) { }

  ngOnInit(): void {
    this.Categoryform = this.fb.group({
      'category' : new FormControl()
    })
  }
  submitForm(){
    this.addservices.addCategory(this.Categoryform.value).subscribe(res => {
      console.log(res);
      this.Categoryform.reset();
    },
    err => {
      console.log(err);
    })
  }
  logoutAdmin(){
    this.adminservice.logoutAdmin();
  }
}
