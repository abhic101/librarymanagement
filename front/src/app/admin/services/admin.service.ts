import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import {Registerstudent} from '../models/registerstudent'
import { tap} from 'rxjs/operators';
import {Totalbooks} from '../models/totalbooks';
import {CategoryBooks} from '../models/category-books';
import {Authors} from '../models/authors';
import {Student} from '../../student/models/student';
import { Router } from '@angular/router';
import { BookRequest } from '../models/bookrequest';
import { IssueRequest } from '../models/issuereq';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http:HttpClient,private router:Router) { }

  getAllRegisterStudent() : Observable<Registerstudent[]>{
    return this.http.get<Registerstudent[]>(`http://localhost:3000/student/getallstudent`).pipe(tap(console.log));
  }

  getTotalBooks() : Observable<Totalbooks[]>{
    return this.http.get<Totalbooks[]>(`http://localhost:3000/admin/totalbooks`).pipe(tap(console.log));
  }

  getCategoryBooks() : Observable<CategoryBooks[]>{
    return this.http.get<CategoryBooks[]>(`http://localhost:3000/admin/getCategory`).pipe(tap(console.log));
  }

  getAuthors() : Observable<Authors[]>{
    return this.http.get<Authors[]>(`http://localhost:3000/admin/getAuthor`).pipe(tap(console.log));
  }

  getBookIssued() : Observable<Student[]>{
    return this.http.get<Student[]>(`http://localhost:3000/admin/getbookissued`).pipe(tap(console.log));
  }
  
  issueBooks(data){
    return this.http.post(`http://localhost:3000/admin/bookissued`,data).pipe(tap(console.log));
  }

  registerNewStudent(data){
    return this.http.post(`http://localhost:3000/student/addstudent`,data).pipe(tap(console.log));
  }

  getBookRequest() : Observable<BookRequest[]>{
    return this.http.get<BookRequest[]>(`http://localhost:3000/admin/getrequests`).pipe(tap(console.log));
  }

  getIssueReq() : Observable<IssueRequest[]>{
    return this.http.get<IssueRequest[]>(`http://localhost:3000/admin/getissuerequest`).pipe(tap(console.log));
  }

  logoutAdmin(){
    localStorage.removeItem("tokenAdmin");
    localStorage.removeItem("AdminEmployeeID");
    this.router.navigate(["/student/adminlogin"]);
  }

  IsAdminLoggedIn(){
    return !!localStorage.getItem("tokenAdmin");
  }

}
