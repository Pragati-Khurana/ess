import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {

  constructor(private _router: Router){}

  canActivate(): boolean{
    if(localStorage.getItem('empid')!=null){
      return true;
    }
    else
    {
      this._router.navigate(['']);
      return false;
    }
  }
  
}
