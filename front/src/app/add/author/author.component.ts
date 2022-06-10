import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {AddService} from '../services/add.service';
import { AdminService } from 'src/app/admin/services/admin.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authorForm : FormGroup

  constructor(private addservices:AddService,private fb:FormBuilder,private adminservice:AdminService) { }

  ngOnInit(): void {
    this.authorForm = this.fb.group({
      'author' : new FormControl()
    })
  }

  submitForm(){
    this.addservices.addAuthors(this.authorForm.value).subscribe(res => {
      console.log(res);
      this.authorForm.reset();
    },
    err => {
      console.log(err);
    }
    )
  }
  logoutAdmin(){
    this.adminservice.logoutAdmin();
  }
}

