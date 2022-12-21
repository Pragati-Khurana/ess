import { Component, OnInit, Input} from '@angular/core';

import {SharedService} from '../../../../shared.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-contact-d',
  templateUrl: './edit-contact-d.component.html',
  styleUrls: ['./edit-contact-d.component.scss']
})
export class EditContactDComponent implements OnInit {

  constructor(private service: SharedService, private modalService: NgbModal) {
   }

  @Input() emp:any;

  eid:any;
  line1:any;
  line2:any;
  city:any;
  state:any;
  country:any;
  mobno:any;
  EmployeeList:any;
  conList:any;

  ename:any;
  dob:any;
  gender:any;
  dept:any;
  department:any;
  bgrp:any;
  category:any;
  designation:any;
  pic:string;

  ngOnInit(): void {
     this.ContactDetails();
  }

  ContactDetails()
  {
    this.eid=localStorage.getItem('empid');
    this.service.getContactDetails(this.eid).subscribe(data=>{
      this.conList=data;
  
      this.line1 = this.conList[0]['Add1'];
      this.line2 = this.conList[0]['Add2'];
      this.city = this.conList[0]['City'];
      this.state = this.conList[0]['State'];
      this.country = this.conList[0]['Country'];
      this.mobno = this.conList[0]['MobNo'];

      // this.eid = this.emp.EmpId;
    this.ename = this.conList[0]['EmpName'];
    this.dob = this.conList[0]['DOB'].toString().substr(0,10);
    // this.dob = this.conList[0].substr(0,10);
    this.gender = this.conList[0]['Gender'];
    this.dept = this.conList[0]['DeptId'];
    this.bgrp = this.conList[0]['BloodGroup'];
    this.category = this.conList[0]['Category'];
    this.designation = this.conList[0]['Designation'];
    this.pic = this.conList[0]['Img'];
    
    });
  }

  updateEmployee(){
      var uval = {EmpId:this.eid,
        EmpName:this.ename,
        DOB:this.dob,
        Gender:this.gender,
        DeptId:this.dept,
        BloodGroup:this.bgrp,
        Category:this.category,
        Designation:this.designation,
        Img:this.pic,
        Add1:this.line1,
        Add2:this.line2,
        City:this.city,
        State:this.state,
        Country:this.country,
        MobNo:this.mobno
    };
    this.service.updateEmployee(uval).subscribe(res=>{
      alert(res.toString());
      });
    }; 
}


