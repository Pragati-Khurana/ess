import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from '../../../shared.service';

@Component({
  selector: 'app-edit-salary',
  templateUrl: './edit-salary.component.html',
  styleUrls: ['./edit-salary.component.scss']
})
export class EditSalaryComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() SList:any;
  // sid:any;
  basic:any;
  hra:any;
  gross:any;
  date:any;

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(){
    // this.sid = this.SList.Id,
    this.basic = this.SList.Basic,
    this.hra = this.SList.HRA,
    this.gross = this.SList.TotalGross_Master,
    this.date = this.SList.RecordType
  }

  editSalaryD(){
    var sval={
      Basic:this.basic,
      HRA:this.hra,
      TotalGross_Master:this.gross,
      RecordType:this.date,
      Id:this.SList.Id
    };
    this.service.updateSalary(sval).subscribe(res=>{
      alert(res.toString());
    });
  }

}
