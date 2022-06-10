import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http:HttpClient) { }

  addTotalBooks(book){
    return this.http.post(`http://localhost:3000/admin/addtotalbooks`,book).pipe(tap(console.log));
  }

  addCategory(category){
    return this.http.post(`http://localhost:3000/admin/addCategory`,category).pipe(tap(console.log));
  }

  addAuthors(author){
    return this.http.post(`http://localhost:3000/admin/addAuthor`,author).pipe(tap(console.log));
  }
}
