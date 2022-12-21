import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { AttendanceUser } from 'src/app/attendance-user';

@Component({
  selector: 'app-add-attandance',
  templateUrl: './add-attandance.component.html',
  styleUrls: ['./add-attandance.component.scss']
})
export class AddAttandanceComponent implements OnInit {

  constructor(private service: SharedService) { }

ename:any;
cardno:any;
pdate:any;
mstatus:any;
itime:any;
otime:any; 
empList:any;
shiftList:any;
body:any;
eid:any;
stime:any;
etime:any;
checkHead:any;
empid2:any;
pdate2:any;
mstatus2:any;
itime2:any;
otime2:any;

attModel = new AttendanceUser('','','','');

  ngOnInit(): void {
    this.loadEmp();
    if(localStorage.getItem('hid'))
    {
      this.checkHead = true;
    }
    else
    {
      this.checkHead = false;
    }
  }

  attandanceRequest(){
     var val = {
       eid:this.eid,
       ename:this.ename,
       acardno:this.cardno,
       pdate:this.attModel.pdate,
       mstatus:this.attModel.mstatus,
       starttime:this.stime,
       endtime:this.etime,
       intime:this.attModel.itime,
       outtime:this.attModel.otime
     }
     this.service.addTempAttandance(val).subscribe(res=>{
      alert(res.toString());
    

    this.body = "You have received a attendance request from " + this.ename;
    var val2 = ["bansi1502@gmail.com","Attendance Application",this.body];

    this.service.sendRequest(val2).subscribe(res=>{
      alert(res.toString());
    });
  });  
  }

  loadEmp(){
    this.service.getEmployeeDetails(localStorage.getItem('empid')).subscribe((data:any)=>{
      this.empList=data;

      this.ename = this.empList[0]['EmpName'];
      this.cardno = this.empList[0]['AttendanceCardNo'];
      this.eid = this.empList[0]['EmpId'];
    });

    this.service.getShiftDetails(localStorage.getItem('empid')).subscribe((data:any)=>{
      this.shiftList=data;

      this.stime = this.shiftList[0]['StartTime'];
      this.etime = this.shiftList[0]['EndTime'];
    });

  }
  attendanceadd()
  {
    var addval = {
      EmpId:this.empid2,
      PunchDate:this.pdate2,
      MusterStatus:this.mstatus2,
      InDTM1:this.itime2,
      OutDTM1:this.otime2
    }
    this.service.addMuster(addval).subscribe(res=>{
     alert(res.toString());
  }
);
  }

}
