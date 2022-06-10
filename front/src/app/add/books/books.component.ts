import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AddService} from '../services/add.service'
import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  addBookForm : FormGroup;

  @ViewChild('modalbtn') modalbtn: ElementRef;

  constructor(private addservice:AddService,private hb:FormBuilder,private adminservice:AdminService) { }

  ngOnInit(): void {
    this.addBookForm = this.hb.group({
      'name':new FormControl(''),
      'author':new FormControl(''),
      'category':new FormControl(''),
      'publication':new FormControl(''),
      'pageno':new FormControl(''),
      'price':new FormControl(''),
      'avilablenumber':new FormControl(''),
      'thumbnail':new FormControl('')
    });
  }

  submitForm(){
    this.addservice.addTotalBooks(this.addBookForm.value).subscribe(res => {
      console.log(res);
      this.modalbtn.nativeElement.click();
    }, 
    err =>{
      console.log(err);
    })
    this.addBookForm.reset();
  }
  logoutAdmin(){
    this.adminservice.logoutAdmin();
  }

}
