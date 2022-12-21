import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../../shared.service';


@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {

  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('');
    }, 1000);
  })

  constructor(private ser:SharedService) { }

  salList:any=[];

  ngOnInit(): void {
    this.SalaryDetails();
  }

  SalaryDetails(){
    this.ser.getSalaryDetails(localStorage.getItem('empid')).subscribe(data=>{
      this.salList=data;
  });

  }
}
