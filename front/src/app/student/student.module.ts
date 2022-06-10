import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component'
import {AuthGuard} from './gaurds/auth.guard';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { BookrequestComponent } from './bookrequest/bookrequest.component';
import { BooksearchassistComponent } from './booksearchassist/booksearchassist.component'

@NgModule({
  declarations: [
    DashbordComponent,
    LoginComponent,
    ViewprofileComponent,
    EditprofileComponent,
    ChangepasswordComponent,
    AdminloginComponent,
    BooksearchComponent,
    BookrequestComponent,
    BooksearchassistComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[AuthGuard]
})
export class StudentModule { }
