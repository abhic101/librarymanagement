import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RegisterstudentComponent } from './registerstudent/registerstudent.component';
import { HttpClientModule } from '@angular/common/http';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { CategoryComponent } from './category/category.component';
import { AuthorComponent } from './author/author.component';
import { BookissuedComponent } from './bookissued/bookissued.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { AuthGuard } from './gaurd/auth.guard';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { BookrequestsComponent } from './bookrequests/bookrequests.component';
import { IssuerequestComponent } from './issuerequest/issuerequest.component';
import { ViewissuereqComponent } from './viewissuereq/viewissuereq.component';

@NgModule({
  declarations: [
    DashbordComponent,
    RegisterstudentComponent,
    AllbooksComponent,
    CategoryComponent,
    AuthorComponent,
    BookissuedComponent,
    AddbooksComponent,
    AddcategoryComponent,
    IssuebookComponent,
    NewstudentComponent,
    BookrequestsComponent,
    IssuerequestComponent,
    ViewissuereqComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers:[AuthGuard]
})
export class AdminModule { }
