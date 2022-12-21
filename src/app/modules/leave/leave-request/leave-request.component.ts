import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { LeaveUser } from 'src/app/leave-user';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent implements OnInit {

  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('');
    }, 1000);
  })

  constructor(private service: SharedService) { }

  leaveModel = new LeaveUser('','','');

  edate:any;
  ename:any;
  fdate:any;
  tdate:any;
  leaves:any;
  leavetype:any;
  remarks:any;
  date:any;
  today:any;
  fromdate:any;
  todate:any;
  f:any;
  t:any;
  fd:any;
  td:any;
  tdays:any;
  hList:any;
  ELDetails:any;

  year1:any;
  year2:any;

  empList:any;
  diffTime:any;
  leaveDetails:any[];
  checkHead:any;
  body:any;
  eList:any;
  i:any;
  tleave:any;

  //cards
  open:any;
  used:any;
  balance:any;
  cardList:any;

  //leave form
  empname:any;
  empfdate:any;
  emptdate:any;
  emptdays:any;
  empleavetype:any;
  empremarks:any;
  emplist:any;
  lcode:any;
  bl:any;
  ul:any;

  ngOnInit(): void {
    this.loadLeaveTypes();

    var date = new Date();
    this.today = (new Date(date.getFullYear(), date.getMonth(), date.getDate())).toString().substr(4,11);
    this.edate=this.today;

    this.service.getEmployeeDetails(localStorage.getItem('empid')).subscribe(data=>{
      this.empList=data;
      this.ename = this.empList[0]['EmpName'];
    });

    if(localStorage.getItem('hid'))
    {
      this.checkHead = true;
    }
    else
    {
      this.checkHead = false;
    }
    this.loadTLeaveDetails();
    this.loadCards();
  }

  datechange1(newDate:Date){
    this.fromdate = newDate;
  }

  datechange2(newDate:Date){
    this.todate=newDate;

    this.fromdate = this.fromdate.split('-');
    this.todate = this.todate.split('-');

    this.fromdate = new Date(this.fromdate[0], this.fromdate[1], this.fromdate[2]);
    this.todate = new Date(this.todate[0], this.todate[1], this.todate[2]);

    this.diffTime = this.todate.getTime() - this.fromdate.getTime();
    this.tdays = this.diffTime/(1000*3600*24);


    // var myDate = new Date(this.fdate);
    // var newDate = this.addDays(myDate,5);

    // var newDate2 = this.formatDate(newDate);

    
  }

  addDays(myDate,days) {
    return new Date(myDate.getTime() + days*24*60*60*1000);
    }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

  addLeave(){

    var item;

    this.service.getTLeaveDID(this.lcode).subscribe(data=>{
      item=data;
    
    var l,days,ab;
    this.f = item[0]['fromdate'].toString().substr(0,10);
    this.t = item[0]['todate'].toString().substr(0,10);

    this.fd = this.f.split('-');
    this.td = this.t.split('-');

    this.fd = new Date(this.fd[0], this.fd[1], this.fd[2]);
    this.td = new Date(this.td[0], this.td[1], this.td[2]);

    this.diffTime = this.td.getTime() - this.fd.getTime();
    days = (this.diffTime/(1000*3600*24))+1;

    this.service.getHead().subscribe(data=>{
      this.hList=data;

      for(this.i=0;this.i<this.hList.length;this.i++)
      {
        if(this.hList[this.i]['EmpId']==localStorage.getItem('hid'))
        {
          ab = this.hList[this.i]['EmpName'];
          break;
        }
      }

      var val4 = {
        ApplicationDate:item[0]['aDate'].toString().substr(0,10),
        FromDate:item[0]['fromdate'].toString().substr(0,10),
        ToDate:item[0]['todate'].toString().substr(0,10),
        EmpId:item[0]['eid'],
        LeaveId:item[0]['lid'],
        LeaveTaken:1,
        Remark:item[0]['remarks'],
        IsApproved:1,
        ApprovedBy:ab,
        ApprovedDate:this.edate,
        IsReject:0,
        RejectBy:''
      }
      this.service.addLEntry2(val4).subscribe(res=>{
        alert(res.toString());
      });

      // var val4 = {
      //   ApplicationDate:item[0]['aDate'],
      //   LeaveDate:this.f,
      //   EmpId:item[0]['eid'],
      //   LeaveId:item[0]['lid'],
      //   LeaveTaken:1,
      //   Remark:item[0]['remarks'],
      //   IsApproved:1,
      //   ApprovedBy:ab,
      //   ApprovedDate:this.edate,
      //   IsReject:0,
      //   RejectBy:''
      // }
      // this.service.addLEntry(val4).subscribe(res=>{
      //   alert(res.toString());
      // });

      // if(days>1)
      // {
      //   for(this.i=1;this.i<days;this.i++)
      //   {
      //     var myDate = new Date(this.f);
      //     var newDate = this.addDays(myDate,this.i);
  
      //     l = this.formatDate(newDate);

      //     var val5 = {
      //       ApplicationDate:item[0]['aDate'],
      //       LeaveDate:l,
      //       EmpId:item[0]['eid'],
      //       LeaveId:item[0]['lid'],
      //       LeaveTaken:1,
      //       Remark:item[0]['remarks'],
      //       IsApproved:1,
      //       ApprovedBy:ab,
      //       ApprovedDate:this.edate,
      //       IsReject:0,
      //       RejectBy:''
      //     }

      //     this.service.addLEntry(val5).subscribe(res=>{
      //       alert(res.toString());
      //     });
      //   }
      // }
      this.service.deleteTLeave(item[0]['tempid']).subscribe(data=>{
        alert(data.toString());
      });
    });
    
    this.service.getELDetails().subscribe(data=>{
      this.ELDetails=data;

      var flag=0;
      var curr = new Date();
      this.i=0;
      while(this.i<this.ELDetails.length)
      {
        if(this.ELDetails[this.i]['EmpId']==item[0]['eid'] && this.ELDetails[this.i]['LeaveYear']==curr.getFullYear())
        {
          this.bl = (this.ELDetails[this.i]['BalanceLeave'])-days;
          // alert(this.bl);
          this.ul = this.ELDetails[this.i]['OpeningLeave']-this.bl;
          // alert(this.ul);
          var uval ={
            BalanceLeave:this.bl,
            UsedLeave:this.ul,
            EmpLeaveId:this.ELDetails[this.i]['EmpLeaveId']
          }
          this.service.updateELDetails(uval).subscribe(res=>{
            alert(res.toString());
            });
            flag=0;
            break;
          }
        else
        {
          flag = 1;
        }
        this.i++;
      }

      if(flag==1)
      {
        var aval = {
          EmpId:item[0]['eid'],
          OpeningLeave:25,
          UsedLeave:days,
          BalanceLeave:25-days,
          LeaveYear:curr.getFullYear()
        }
        this.service.addELDetails(aval).subscribe(res=>{
          alert(res.toString());
        });
      }
    });
  });
  this.loadTLeaveDetails(); 
  location.reload();
  }

  declineLeave(){
    var item;

    this.service.getTLeaveDID(this.lcode).subscribe(data=>{
      item=data;
    
    var l,days,ab;
    this.f = item[0]['fromdate'].toString().substr(0,10);
    this.t = item[0]['todate'].toString().substr(0,10);

    this.fd = this.f.split('-');
    this.td = this.t.split('-');

    this.fd = new Date(this.fd[0], this.fd[1], this.fd[2]);
    this.td = new Date(this.td[0], this.td[1], this.td[2]);

    this.diffTime = this.td.getTime() - this.fd.getTime();
    days = (this.diffTime/(1000*3600*24))+1;

    this.service.getHead().subscribe(data=>{
      this.hList=data;

      for(this.i=0;this.i<this.hList.length;this.i++)
      {
        if(this.hList[this.i]['EmpId']==localStorage.getItem('hid'))
        {
          ab = this.hList[this.i]['EmpName'];
          break;
        }
      }

      var val4 = {
        ApplicationDate:item[0]['aDate'].toString().substr(0,10),
        FromDate:item[0]['fromdate'].toString().substr(0,10),
        ToDate:item[0]['todate'].toString().substr(0,10),
        EmpId:item[0]['eid'],
        LeaveId:item[0]['lid'],
        LeaveTaken:1,
        Remark:item[0]['remarks'],
        IsApproved:0,
        ApprovedBy:ab,
        ApprovedDate:this.edate,
        IsReject:1,
        RejectBy:ab
      }
      this.service.addLEntry2(val4).subscribe(res=>{
        alert(res.toString());
      });
      // var val4 = {
      //   ApplicationDate:item[0]['aDate'],
      //   LeaveDate:this.f,
      //   EmpId:item[0]['eid'],
      //   LeaveId:item[0]['lid'],
      //   LeaveTaken:1,
      //   Remark:item[0]['remarks'],
      //   IsApproved:1,
      //   ApprovedBy:ab,
      //   ApprovedDate:this.edate,
      //   IsReject:0,
      //   RejectBy:''
      // }
      // this.service.addLEntry(val4).subscribe(res=>{
      //   alert(res.toString());
      // });

      // if(days>1)
      // {
      //   for(this.i=1;this.i<days;this.i++)
      //   {
      //     var myDate = new Date(this.f);
      //     var newDate = this.addDays(myDate,this.i);
  
      //     l = this.formatDate(newDate);

      //     var val5 = {
      //       ApplicationDate:item[0]['aDate'],
      //       LeaveDate:l,
      //       EmpId:item[0]['eid'],
      //       LeaveId:item[0]['lid'],
      //       LeaveTaken:1,
      //       Remark:item[0]['remarks'],
      //       IsApproved:0,
      //       ApprovedBy:'',
      //       ApprovedDate:this.edate,
      //       IsReject:1,
      //       RejectBy:ab
      //     }

      //     this.service.addLEntry(val5).subscribe(res=>{
      //       alert(res.toString());
      //     });
      //   }
      // }
      this.service.deleteTLeave(item[0]['tempid']).subscribe(data=>{
        alert(data.toString());
      });
    });
  });
  this.loadTLeaveDetails();
  location.reload();
  }
 
  
  loadForm(item:any){
    var eeid = item.eid;
    this.service.getEmployeeDetails(eeid).subscribe((data:any)=>{
      this.emplist=data;

      this.lcode = item.tempid;
      this.empname = this.emplist[0]['EmpName'];
      this.empfdate = item.fromdate.toString().substr(0,10);
      this.emptdate = item.todate.toString().substr(0,10);

      var lid = item.lid;
      this.loadLeaveTypes();
      var j=0;
      while(j<this.leaves.length)
      {
        if(this.leaves[j]['LeaveId']==lid)
        {
          this.empleavetype = this.leaves[j]['LeaveName'];
          break;
        }
        j++;
      }

      this.empremarks = item.remarks;

      var fd1, td1, diff;
      fd1 = item.fromdate.toString().substr(0,10);
      td1 = item.todate.toString().substr(0,10);
      fd1 = fd1.split('-');
      td1 = td1.split('-');
  
      fd1 = new Date(fd1[0], fd1[1], fd1[2]);
      td1 = new Date(td1[0], td1[1], td1[2]);
  
      diff = td1.getTime() - fd1.getTime();
      this.emptdays = (diff/(1000*3600*24))+1;

    });
  }

  loadLeaveTypes()
  {
    this.service.getLeaveNames().subscribe((data:any)=>{
      this.leaves=data;
    });
  }

  loadTLeaveDetails(){
    this.service.getTLeaveD().subscribe((data:any)=>{
      this.tleave=data;
    });
  }

  loadCards(){
    var yr = new Date();
    this.service.getELDetailsID(localStorage.getItem('empid'),yr.getFullYear()).subscribe(data=>{
      this.cardList=data;

      this.open = this.cardList[0]['OpeningLeave'];
      this.used = this.cardList[0]['UsedLeave'];
      this.balance = this.cardList[0]['BalanceLeave'];

    });
  }

  leaveRequest(){
    this.leaveDetails = [this.edate, this.ename, this.leaveModel.fdate, this.leaveModel.tdate, this.leavetype, this.leaveModel.remarks];

    this.service.getEmployeeMaster().subscribe(data=>{
      this.eList=data;

      for(this.i=0;this.i<this.eList.length;this.i++)
      {
        if(this.eList[this.i]['EmpName']==this.leaveDetails[1])
        {
          this.leaveDetails[1]=this.eList[this.i]['EmpId'];
          break;
        }
      }

      this.service.getLeaveNames().subscribe((data:any)=>{
        this.leaves=data;

        for(this.i=0;this.i<this.leaves.length;this.i++)
        {
          if(this.leaves[this.i]['LeaveName']==this.leaveDetails[4])
          {
            this.leaveDetails[4]=this.leaves[this.i]['LeaveId'];
            break;
          }
        }
        var val2 = {
          aDate:this.leaveDetails[0],
          eid:this.leaveDetails[1],
          fromdate:this.leaveDetails[2],
          todate:this.leaveDetails[3],
          lid:this.leaveDetails[4],
          remarks:this.leaveDetails[5],
        }

        this.service.addTLeave(val2).subscribe(res=>{
          alert(res.toString());
        });
      });
    });
    
    this.body = "You have received a leave request from " + this.ename;
    var val = ["pragatikhurana14@gmail.com","Leave Application",this.body];

    this.service.sendRequest(val).subscribe(res=>{
      alert(res.toString());
    });

    this.fdate="";
    this.tdate="";
    this.tdays="";
    this.leavetype="";
    this.remarks="";

  }
}
