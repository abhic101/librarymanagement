import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Student} from '../models/student';
import { Totalbooks } from '../models/totalbooks';
import {LoginStudent} from '../models/login-student'
import { tap} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  loginStudent(user){
  return this.http.post<any>("http://65.2.47.194:3000/student/loginstudent",user);
  }

  getStudentBooks(id) : Observable<Student[]>{
     return this.http.get<Student[]>(`http://65.2.47.194:3000/student/getdata/${id}`).pipe(tap(console.log));
  }

  getLoginStudent(rollNo){
    return this.http.get<LoginStudent>(`http://65.2.47.194:3000/student/getlogin/${rollNo}`).pipe(tap(console.log));
  }
  
  editStudentDetail(id,data){
    const httpheader =  new HttpHeaders()
      .set('content-type', 'application/json')
      .set('auth-token',localStorage.getItem("tokenStudent"));

    return this.http.put<any>(`http://65.2.47.194:3000/student/updateDetail/${id}`,data,{headers:httpheader});
  }

  changePasswordStudent(id,data){
    return this.http.put<any>(`http://65.2.47.194:3000/student/changepassword/${id}`,data);
  }

  loginAdmin(user){
    return this.http.post<any>("http://65.2.47.194:3000/admin/loginadmin",user);
  }

  requestBook(bookrequest){
    return this.http.post(`http://65.2.47.194:3000/student/bookrequest`,bookrequest).pipe(tap(console.log));
  }

  issuerequest(issuerequests){
    return this.http.post(`http://65.2.47.194:3000/student/issuerequest`,issuerequests).pipe(tap(console.log));
  }

  isStudentLogin(){
    return !!localStorage.getItem("tokenStudent");
  }
  
  getTotalBooks() : Observable<Totalbooks[]>{
    return this.http.get<Totalbooks[]>(`http://65.2.47.194:3000/student/totalbooks`).pipe(tap(console.log));
  }
}
