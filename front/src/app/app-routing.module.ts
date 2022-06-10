import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"student",
    pathMatch:"full"
  },
  {
    path:"student",
    loadChildren : ()=> import("./student/student.module").then(m=> m.StudentModule)
  },
  {
    path:"admin",
    loadChildren : ()=> import("./admin/admin.module").then(n => n.AdminModule)
  },
  {
    path:'**',
    component:ErrorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
