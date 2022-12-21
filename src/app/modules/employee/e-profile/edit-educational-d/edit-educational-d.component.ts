import { Component, OnInit } from '@angular/core';

import {SharedService} from '../../../../shared.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-educational-d',
  templateUrl: './edit-educational-d.component.html',
  styleUrls: ['./edit-educational-d.component.scss']
})
export class EditEducationalDComponent implements OnInit {

  constructor(private ser: SharedService,private modalService: NgbModal) { }

  deg:any;
  sub:any;
  class:any;
  year:any;
  eduList:any=[];
  eid:any;

  
  ngOnInit(): void {
    this.educationDetails();
  }

  educationDetails()
  {
    this.eid=localStorage.getItem('empid');

      this.ser.getEducationDetails(this.eid).subscribe(data=>{
      this.eduList=data;

      this.deg = this.eduList[0]['Qualification'];
      this.sub = this.eduList[0]['Subject'];
      this.class = this.eduList[0]['Class'];
      this.year = this.eduList[0]['AcademicYr'];
    });
  }

  updateEmployee(){
    var uval3 = {
      EmpId:this.eid,
      Qualification:this.deg,
      Subject:this.sub,
      Class:this.class,
      AcademicYr:this.year
    }
    this.ser.updateEducation(uval3).subscribe(res=>{
      alert(res.toString());
      });  
    }
  }

