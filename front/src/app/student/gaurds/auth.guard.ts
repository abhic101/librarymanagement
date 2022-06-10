import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {StudentService} from '../services/student.service'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private studentservice:StudentService,private router:Router){}

  canActivate() : boolean{
    if(this.studentservice.isStudentLogin()){
      return true;
    }else{
      this.router.navigate(["/student"]);
      return false;
    }
  }
  
}
