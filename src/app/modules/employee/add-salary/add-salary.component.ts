import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from '../../../shared.service';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.scss']
})
export class AddSalaryComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() empid:any;
  sid:any;
  basic:any;
  hra:any;
  gross:any;
  date:any;

  ngOnInit(): void {
    
  }

  addSalaryD(){
    var sval={
      Id:this.sid,
      EmpId:this.empid,
      Basic:this.basic,
      HRA:this.hra,
      TotalGross_Master:this.gross,
      RecordType:this.date
    };
    this.service.addSalary(sval).subscribe(res=>{
      alert(res.toString());
    });
  }

}
