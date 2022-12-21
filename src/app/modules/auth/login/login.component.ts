import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
// import {DashboardComponent} from '../../menus/dashboard/dashboard.component';
import {AuthServiceService} from '../../../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service:SharedService, private route:Router, private auth:AuthServiceService) { }

  list:any=[];
  hList:any=[];
  i:number;
  j:number;
  flag:number=2;
  DepartmentList:any=[];
  deptHasError = true;

  userModel = new User('','','default');

  ngOnInit(): void {
    this.refreshLoginDet();
    this.loadDepartmentList();
  }

  loadDepartmentList()
  {
    this.service.getDepartmentNames().subscribe((data:any)=>{
      this.DepartmentList=data;
    });
  }

  refreshLoginDet()
  {
    this.service.getEmployeeMaster().subscribe(data=>{
      this.list=data;
    });

    this.service.getHead().subscribe(data=>{
      this.hList=data;
    });
  }

  //department validation
  // validateDept(value)
  // {
  //   if(value=='default')
  //   {
  //     this.deptHasError = true;
  //   }
  //   else
  //   {
  //     this.deptHasError = false;
  //   }
  // }

  submit(){
    for(this.i=0;this.i<this.list.length;this.i++)
    {
      if((this.list[this.i]["EmpUser"]==this.userModel["uname"]) && (this.list[this.i]["EmpPwd"]==this.userModel["pass"]))
      {
        for(this.j=0;this.j<this.hList.length;this.j++)
        {
          if(this.list[this.i]["EmpId"]==this.hList[this.j]["EmpId"])
          {
            localStorage.setItem('hid',this.hList[this.j]["EmpId"]);
          }
        }

        // var o = this.auth.loggedin(this.userModel["uname"]);
        var o = this.auth.loggedin(this.list[this.i]["EmpId"]);
        if(o==true)
        {
          this.flag = 1;
          console.log("Success");
          this.route.navigate(['/dashboard']);
          break;
        }
      }
      else
      {
        this.flag = 0;
      }
      
    }
  }

}
