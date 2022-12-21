import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('');
    }, 1000);
  })

  constructor(private service: SharedService) { }

tempList:any;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.service.getTAttendance().subscribe((data:any)=>{
      this.tempList=data;      
    });
  }

  addMuster(item:any){

    var aval = {
      EmpId:item.eid,
      PunchDate:item.pdate,
      MusterStatus:item.mstatus,
      InDTM1:item.intime,
      OutDTM1:item.outtime
    }

    this.service.addMuster(aval).subscribe(res=>{
      alert(res.toString());
    });

    this.service.deleteTAttendance(item.tempid).subscribe(data=>{
      alert(data.toString());
    });
  }

  deleteMuster(item:any){
    this.service.deleteTAttendance(item.tempid).subscribe(data=>{
      alert(data.toString());
    });
    location.reload();
  }
}
