import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  loggedin(eid: any)
  {
    if(eid!=null)
    {
      localStorage.setItem('empid',eid);
      localStorage.setItem('emp',eid);
      return true;
    }
    else
    {
      return false;
    }
  }
}
