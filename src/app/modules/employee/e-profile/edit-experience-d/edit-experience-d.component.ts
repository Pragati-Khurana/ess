import { Component, OnInit } from '@angular/core';

import {SharedService} from '../../../../shared.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-experience-d',
  templateUrl: './edit-experience-d.component.html',
  styleUrls: ['./edit-experience-d.component.scss']
})
export class EditExperienceDComponent implements OnInit {

  constructor(private ser:SharedService,private modalService: NgbModal) { }
  srno:any;
  doj:any;
  dol:any;
  expmon:any;
  experList:any=[];
  eid:any;

  ngOnInit(): void {
    this.ExperienceDetails();
  }

  ExperienceDetails(){

    this.eid=localStorage.getItem('empid');
    this.ser.getExperienceDetails(this.eid).subscribe(data=>{
      this.experList=data;

      // this.ser.getDesignationDetails(localStorage.getItem('empID')).subscribe(data2=>{
      //   this.desig=data2;
         
    
      this.srno = this.experList[0]['SrNo'];
      this.doj = this.experList[0]['DOJ'].toString().substr(0,10);
      this.dol = this.experList[0]['DOL'].toString().substr(0,10);
      this.expmon = this.experList[0]['ExpMon'];
      });
  }

  updateEmployee(){
    var uval2 = {
      EmpId:this.eid,
      SrNo:this.srno,
      DOJ:this.doj,
      DOL:this.dol,
      ExpMon:this.expmon
    }
    
    
    this.ser.updateExperience(uval2).subscribe(res=>{
      alert(res.toString());
      }); 

  }
}

