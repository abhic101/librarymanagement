import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AdminService} from '../services/admin.service'

@Injectable()
export class AuthGuard implements CanActivate {
 
constructor(private adminservice:AdminService,private route:Router){}

canActivate() : boolean{
  if(this.adminservice.IsAdminLoggedIn()){
    return true;
  }
  else{
    this.route.navigate(["/student/adminlogin"]);
    return false;
  }
}
  
}
