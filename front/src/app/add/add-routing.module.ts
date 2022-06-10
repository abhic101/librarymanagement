import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { BooksComponent } from './books/books.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path:'books',
    component:BooksComponent
  },
  {
    path:'category',
    component:CategoryComponent
  },
  {
    path:'author',
    component:AuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRoutingModule { }
