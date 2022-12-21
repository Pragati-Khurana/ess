import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from '../../../shared.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-daily-attendance',
  templateUrl: './edit-daily-attendance.component.html',
  styleUrls: ['./edit-daily-attendance.component.scss']
})
export class EditDailyAttendanceComponent implements OnInit {

  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('');
    }, 1000);
  })

  constructor(private service: SharedService, private modalService: NgbModal) { }

 @Input() emp:any;

empid2:any;
pdate2:any;
mstatus2:any;
itime2:any;
otime2:any; 
AttenList:any=[];


  ngOnInit(): void {
    this.AttendanceDetails();
  }

  AttendanceDetails()
  {
    this.empid2 = this.emp.EmpId;
    this.pdate2 = this.emp.PunchDate;
    this.mstatus2=this.emp.MusterStatus; 

    this.itime2 =this.emp.InDTM1;
    this.otime2 =this.emp.OutDTM1;
}

updateAttendance(){
  var uval2 = {
    MusterStatus:this.mstatus2,
    InDTM1:this.itime2,
    OutDTM1:this.otime2,
    EmpId:this.empid2,
    PunchDate:this.pdate2
  }
  this.service.editAttendance(uval2).subscribe(res=>{
    alert(res.toString());
    }); 
}

}
