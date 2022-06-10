import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Totalbooks} from '../../admin/models/totalbooks';
import {CategoryBooks} from '../../admin/models/category-books'
import {Authors} from '../../admin/models/authors'
import { tap} from 'rxjs/operators';
import {Student} from '../../student/models/student'

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http:HttpClient) { }

  getTotalBooks() : Observable<Totalbooks[]>{
    return this.http.get<Totalbooks[]>(`http://localhost:3000/admin/totalbooks`).pipe(tap(console.log));
  }

  getCategoryBooks() : Observable<CategoryBooks[]>{
    return this.http.get<CategoryBooks[]>(`http://localhost:3000/admin/getCategory`).pipe(tap(console.log));
  }

  getAuthors() : Observable<Authors[]>{
    return this.http.get<Authors[]>(`http://localhost:3000/admin/getAuthor`).pipe(tap(console.log));
  }

  getBookById(id){
    return this.http.get(`http://localhost:3000/admin/gettotalbooks/${id}`).pipe(tap(console.log));
  }

  updateBookById(id,data){
    return this.http.put(`http://localhost:3000/admin/updateBooks/${id}`,data).pipe(tap(console.log));
  }

  deleteBooksById(id){
    return this.http.delete(`http://localhost:3000/admin/deletebook/${id}`).pipe(tap(console.log));
  }

  getCategoryById(id){
    return this.http.get(`http://localhost:3000/admin/getCategoryById/${id}`).pipe(tap(console.log));
  }

  updateCategory(id,data){
    return this.http.put(`http://localhost:3000/admin/updateCategory/${id}`,data).pipe(tap(console.log));
  }

  deleteCategory(id){
    return this.http.delete(`http://localhost:3000/admin/deleteCategory/${id}`).pipe(tap(console.log));
  }

  getAuthorById(id){
    return this.http.get(`http://localhost:3000/admin/getAuthorById/${id}`).pipe(tap(console.log));
  }

  updateAuthor(id,data){
    return this.http.put(`http://localhost:3000/admin/updateAuthor/${id}`,data).pipe(tap(console.log));
  }

  deleteAuthor(id){
    return this.http.delete(`http://localhost:3000/admin/deleteAuthor/${id}`).pipe(tap(console.log));
  }

  getIssuedBooks() : Observable<Student[]>{
    return this.http.get<Student[]>(`http://localhost:3000/admin/getbookissued`).pipe(tap(console.log));
  }

  getIssuedBooksByID(id){
    return this.http.get(`http://localhost:3000/admin/getBookIssuedById/${id}`).pipe(tap(console.log));
  }

  updateIssuedBooks(id,data){
    return this.http.put(`http://localhost:3000/admin/updateBookIssuedById/${id}`,data).pipe(tap(console.log));
  }

  deleteIssuedBooks(id){
    return this.http.delete(`http://localhost:3000/admin/deleteIssuedBooks/${id}`).pipe(tap(console.log));
  }

}
