import { Component, OnInit } from '@angular/core';
// import {SharedService} from 'src/app/shared.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  EmployeeList:any=[];

  ngOnInit(): void {
    // this.refreshEmpList();
  }

  // refreshEmpList(){
  //   this.service.getEmployeeMaster().subscribe(data=>{
  //     this.EmployeeList=data;

  //     console.log(this.EmployeeList);
  //   });
  // }

  // changePage(item){
  //   localStorage.setItem('empID',item);
  //   // this.route.navigate(['/eprofile']);
  // }

}
