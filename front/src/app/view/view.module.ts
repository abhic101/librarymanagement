import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { BooksComponent } from './books/books.component';
import { CategoryComponent } from './category/category.component';
import { AuthorComponent } from './author/author.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooksviewComponent } from './booksview/booksview.component';
import { CategoryviewComponent } from './categoryview/categoryview.component';
import { AuthhorviewComponent } from './authhorview/authhorview.component';
import { IssedbooksviewComponent } from './issedbooksview/issedbooksview.component';
import { IssedbooksComponent } from './issedbooks/issedbooks.component';

@NgModule({
  declarations: [
    BooksComponent,
    CategoryComponent,
    AuthorComponent,
    BooksviewComponent,
    CategoryviewComponent,
    AuthhorviewComponent,
    IssedbooksviewComponent,
    IssedbooksComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ViewModule { }
