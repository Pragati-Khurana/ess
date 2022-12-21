import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-leave',
  templateUrl: './edit-leave.component.html',
  styleUrls: ['./edit-leave.component.scss']
})
export class EditLeaveComponent implements OnInit {

  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('');
    }, 1000);
  })

  constructor(private service:SharedService) { }

  @Input() leave:any;
  edate:any;
  ename:any;
  fdate:any;
  tdate:any;
  leaves:any;
  leavetype:any;
  remarks:any;
  isapp:any;
  isrej:any;
  empList:any;
  empList2:any;
  lnames:any;
  today:any;
  i:any;

  ngOnInit(): void {
    this.fillForm();
    this.loadLeaveTypes();
  }

  fillForm(){
    this.service.getEmployeeDetails(this.leave.EmpId).subscribe(data=>{
      this.empList=data;
      this.edate = this.leave.ApplicationDate.toString().substr(0,10);
      this.ename = this.empList[0]['EmpName'];
      this.fdate = this.leave.FromDate.toString().substr(0,10);
      this.tdate = this.leave.ToDate.toString().substr(0,10);

      this.service.getLMaster(this.leave.LeaveId).subscribe(data=>{
        this.lnames=data;

        this.i=0
        while(this.i<this.leaves.length)
        {
          if(this.leaves[this.i]['LeaveName']==this.lnames[0]['LeaveName'])
          {
            this.leavetype = this.lnames[0]['LeaveName'];
          }
          this.i++;
        }
        // this.leavetype = this.lnames[0]['LeaveName'];
        this.remarks = this.leave.Remark;
        this.isapp = this.leave.IsApproved;
        this.isrej = this.leave.IsReject;
      });
    });
  }

  loadLeaveTypes()
  {
    this.service.getLeaveNames().subscribe((data:any)=>{
      this.leaves=data;
    });
  }

  editLeave(){
    this.service.getEmployeeDetails(localStorage.getItem('empid')).subscribe(data=>{
      this.empList2=data;

      var date = new Date();
    this.today = (new Date(date.getFullYear(), date.getMonth(), date.getDate())).toString().substr(4,11);

    // this.service.getLeaveNames().subscribe((data:any)=>{
    //   this.leaves=data;

      for(this.i=0;this.i<this.leaves.length;this.i++)
      {
        if(this.leaves[this.i]['LeaveName']==this.leavetype)
        {
          this.leavetype=this.leaves[this.i]['LeaveId'];
          break;
        }
      }


      var val = {
        ApplicationDate:this.edate.toString().substr(0,10),
        FromDate:this.fdate.toString().substr(0,10),
        ToDate:this.tdate.toString().substr(0,10),
        EmpId:this.leave.EmpId,
        LeaveId:this.leavetype,
        LeaveTaken:1,
        Remark:this.remarks,
        IsApproved:this.isapp,
        ApprovedBy:this.empList2[0]['EmpName'],
        ApprovedDate:'2021-07-11',
        IsReject:this.isrej,
        RejectBy:this.empList2[0]['EmpName'],
        Id:this.leave.Id
      }

      console.log(val);
      this.service.updateLeaveEntry2(val).subscribe(res=>{
        alert(res.toString());
        });
    });
  // });
    // location.reload();
  }

}
