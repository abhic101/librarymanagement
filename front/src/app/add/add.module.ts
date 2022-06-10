import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-routing.module';
import { CategoryComponent } from './category/category.component';
import { BooksComponent } from './books/books.component';
import { AuthorComponent } from './author/author.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CategoryComponent,
    BooksComponent,
    AuthorComponent
  ],
  imports: [
    CommonModule,
    AddRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AddModule { }
