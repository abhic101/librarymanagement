import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthhorviewComponent } from './authhorview/authhorview.component';
import { AuthorComponent } from './author/author.component';
import { BooksComponent } from './books/books.component';
import { BooksviewComponent } from './booksview/booksview.component';
import { CategoryComponent } from './category/category.component';
import { CategoryviewComponent } from './categoryview/categoryview.component';
import { IssedbooksviewComponent } from './issedbooksview/issedbooksview.component';
import { IssedbooksComponent } from './issedbooks/issedbooks.component'

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'author',
    component: AuthorComponent
  },
  {
    path: 'books/:id',
    component: BooksviewComponent
  },
  {
    path: 'category/:id',
    component: CategoryviewComponent
  },
  {
    path: 'author/:id',
    component: AuthhorviewComponent
  },
  {
    path: 'issuebook',
    component: IssedbooksComponent
  },
  {
    path: 'issuebook/:id',
    component: IssedbooksviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
