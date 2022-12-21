import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-daily-attendance',
  templateUrl: './daily-attendance.component.html',
  styleUrls: ['./daily-attendance.component.scss']
})
export class DailyAttendanceComponent implements OnInit {

  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('');
    }, 1000);
  })

  constructor(private service:SharedService, private route:Router,private modalService: NgbModal) { }

  empname:any;
  fromdate:any;
  todate:any;
  AttendanceList:any=[];

  closeResult: string;

  ModalTitle:any;
  searchText:string="";
  checkHead:any;


  ngOnInit(): void {
    // this.refreshAttendanceList();
    this.refreshAttendanceListall();

    if(localStorage.getItem('hid'))
    {
      this.checkHead = true;
    }
    else
    {
      this.checkHead = false;
    }

  }

  refreshAttendanceList()
  {
    this.service.getAttendanceList(localStorage.getItem('empID')).subscribe(data=>{
      this.AttendanceList=data;

      this.empname=this.AttendanceList[0]['EmpName'];
    }); 
  }
  
  newlist()
  {
    this.service.getSearchDateWise(localStorage.getItem('empID'),this.fromdate,this.todate).subscribe(data=>{
      this.AttendanceList=data;
    });
  }


  //hr side

  refreshAttendanceListall()
  {
    this.service.getFullAttendanceList().subscribe(data=>{
           this.AttendanceList=data;
          });  
      this.searchText='';    
      this.fromdate=null;
      this.todate=null;
  }

  afterSearchDateWise()
  {
    this.service.SearchByDate(this.searchText,this.fromdate,this.todate).subscribe(data=>{
      this.AttendanceList=data;
      // console.log(this.AttendanceList);
    });
  }

  
  open(content){
    this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  
    this.ModalTitle = "ADD ATTENDANCE INFORMATION";
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  searchEmployee(){
    this.AttendanceList = "";

    this.service.SearchEmpAttendance(this.searchText).subscribe(data=>{
      this.AttendanceList=data;
    });
    // console.log(this.AttendanceList);
  }
}
