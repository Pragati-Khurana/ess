import { Component, OnInit  } from '@angular/core';

import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

import {SharedService} from 'src/app/shared.service';
import { Router } from '@angular/router';
// import { count } from 'node:console';
// import { count } from 'node:console';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('');
    }, 1000);
  })
   
  constructor(private service:SharedService, private route:Router) {
    
   }

  count:any;
  countLeave:any;
  countAttendance:any;
  d1:any;
  d2:any;
  d:any;
  m:any;
  EmployeeList:any;
  i:any;
  bday:any;
  countM:any=0;
  countF:any;
  perM:any=0;
  perF:any=0;
  dept:any;
  yr:any;
  PhotoFilePath:any;
  pic:any;
  leaves:any;
  attendances:any;
  countLeave2:any;
  avaLeave:any;
  weeklyoff:any;
  empList2:any;

  checkHead:any;

  ngOnInit(): void {
    if(localStorage.getItem('hid'))
    {
      this.checkHead = true;
    }
    else
    {
      this.checkHead = false;
    }
    this.onload();
    this.service.getTLeaveD().subscribe(data=>{
      this.leaves=data;

      this.countLeave = this.leaves.length;
    });

    this.service.getTAttendance().subscribe(data=>{
      this.attendances=data;

      this.countAttendance = this.attendances.length;
    });

    this.service.getELDetailsID(localStorage.getItem('empid'),2021).subscribe(data=>{
      this.countLeave2=data;

      this.avaLeave = this.countLeave2[0]['BalanceLeave'];
    });

    this.service.getEmployeeDetails(localStorage.getItem('empid')).subscribe(data=>{
      this.empList2=data;

      this.weeklyoff = this.empList2[0]['WeeklyOff'];
    });
  }

  onload(){

    this.yr = new Date().getFullYear();

    // this.service.CountGenderM().subscribe(data=>{
    //   this.countM=data[0]['Column1']; 

    //   this.loadCountM(this.countM);
    // });

    // this.service.CountGenderF().subscribe(data=>{
    //   this.countF=data[0]['Column1']; 

    //   this.loadCountF(this.countF);
    // });
    this.countF = 20;
    this.countM = 80;

    this.service.CountE().subscribe(data=>{
      this.count=data[0]['Column1']; 

      this.loadCountE(this.count);
    });

    //current date
    this.bday="";
    this.d1 = new Date();
    if(this.d1.getMonth()<9)
    {
      this.m = (this.d1.getMonth()+1);
      this.m = '0'+this.m;
    }
    else
    {
      this.m = (this.d1.getMonth()+1);
    }

    if(this.d1.getDate()<10)
    {
      this.d = '0'+this.d1.getDate();
    }
    this.d2 = this.m + '-' + this.d1.getDate();

    this.service.getEmployeeMaster().subscribe(data=>{
      this.EmployeeList=data;

      for(this.i=0;this.i<this.EmployeeList.length;this.i++)
      {
        if(this.d2 == this.EmployeeList[this.i]['DOB'].toString().substr(5,5))
        {
          this.bday = this.bday + " " + this.EmployeeList[this.i]['EmpName'];
          //image
          this.pic = this.EmployeeList[this.i]['Img'];;
          this.PhotoFilePath=this.service.PhotoUrl+this.pic;
        }
      }
      if(this.bday=="")
      {
        this.bday="Today there is no one's Birthday!!!";
      }

    });  
  }

  changePage(){
    this.route.navigate(['./employee/display']);
  }

  //piechart
  loadCountE(val:any){
    this.count = val;
    this.perF = this.countF*100/this.count;
    this.perM = this.countM*100/this.count;
  }
  loadCountM(val:any){
    this.countM = 70;
  }
  loadCountF(val:any){
    this.countF = 30;
  }  

  doughnutChartLabels: Label = ['Female', 'Male'];
  doughnutChartData: MultiDataSet = [[this.perF, this.perM] ];
  doughnutChartType: ChartType = 'doughnut';
  public chartColors() {
    return [{ // first color
      backgroundColor: ['#464866 ','#aaabb8'],
      borderColor: 'white',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }
]
}

  //bar graph
  public chartColors2() {
    return [{ // first color
      backgroundColor: '#29648a',
      borderColor: 'white',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }
]
}

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['ASST.LAB INCHARGE', 'SUPERVISOR', 'CHILLING OPERATOR', 'FITTER', 'OPERATOR', 'TR.DIP.ENGINEER','LAB CHEMIST','TIME KEEPER','CLERK'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [10,30,7,2,20,12,1,11,7], label: 'Employee Count By Designation' }
  ];

}
