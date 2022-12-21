import { Component, OnInit, Input } from '@angular/core';

import {SharedService} from '../../../shared.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { EmpUser } from 'src/app/emp-user';
import { ContactUser } from 'src/app/contact-user';
import { ExperienceUser } from 'src/app/experience-user';
import { EducationUser } from 'src/app/education-user';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit {

  constructor(private service: SharedService, private modalService: NgbModal) { 
    setInterval(()=>{this.displayFamilyD()} ,1000);
    setInterval(()=>{this.displaySalaryD()} ,1000);
  }

  gcheck:any=true;
  Genders = ['FEMALE','MALE'];
  euser:any;
  epwd:any;

  empModel = new EmpUser(0,'','','default','','','','');
  contactModel = new ContactUser('','','','',0);
  expModel = new ExperienceUser(0);
  eduModel = new EducationUser('','','',0);

  validateGender(value){
    if(value=='default'){
      this.gcheck = true;
    }
    else{
      this.gcheck = false;
      this.gender=value;
    }
  }


  eid:any;
  ename:any;
  dob:any;
  gender:any;
  dept:any;
  department:any;
  bgrp:any;
  category:any;
  designation:any;
  pic:string;
  PhotoFilePath:string;
  line1:any;
  line2:any;
  city:any;
  state:any;
  country:any;
  mobno:any;
  srno:any;
  doj:any;
  dol:any;
  expmon:any;
  degree:any;
  sub:any;
  class1:any;
  year:any;
  basic:any;
  hra:any;
  gross:any;
  date:any;
  i:number;
  d:any;

  empid:any;
  FamilyList:any;
  SalaryList:any;

  closeResult: string;
  ModalTitle:any;

  ngOnInit(): void {
    this.loadDeptList();
  }

  loadDeptList()
  {
    this.service.getDepartmentNames().subscribe((data:any)=>{
      this.dept=data;
  });
}

addFamily(content){
  this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  this.ModalTitle = "ADD FAMILY INFORMATION";
  this.empid = this.empModel.eid;
  this.displayFamilyD();
}

displayFamilyD(){
  this.service.getFamilyDetails(this.empid).subscribe(data=>{
    this.FamilyList=data;
  });
}

addSalary(content){
  this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  this.ModalTitle = "ADD SALARY INFORMATION";
  this.empid = this.eid;
  this.displaySalaryD();
}

displaySalaryD(){
  this.service.getSalaryDetails(this.empid).subscribe(data=>{
    this.SalaryList=data;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

addEmployee(){
  this.service.getDepartmentNames().subscribe((data:any)=>{
    this.dept=data;

    for(this.i=0;this.i<this.dept.length;this.i++)
    {
      // alert(this.dept[this.i]['DeptName']);
      if(this.dept[this.i]['DeptName']==this.department)
      {
        this.d = this.dept[this.i]['DeptId'];
        break;
      }
    }
    var val = {EmpId:this.empModel.eid,
      EmpName:this.empModel.ename,
      DOB:this.empModel.dob,
      Gender:this.empModel.gender,
      DeptId:this.d,
      BloodGroup:this.bgrp,
      Category:this.empModel.category,
      Designation:this.empModel.designation,
      Img:this.pic,
      Add1:this.contactModel.line1,
      Add2:this.line2,
      City:this.contactModel.city,
      State:this.contactModel.state,
      Country:this.contactModel.country,
      MobNo:this.contactModel.mobno,
      EmpUser:this.empModel.euser,
      EmpPwd:this.empModel.epwd
  };
  this.service.addEmployee(val).subscribe(res=>{
    alert(res.toString());
  });
  });  

  

var val2 = {
  EmpId:this.empModel.eid,
  SrNo:this.srno,
  DOJ:this.doj,
  DOL:this.dol,
  ExpMon:this.expmon
}

var val3 = {
  EmpId:this.empModel.eid,
  Qualification:this.eduModel.degree,
  Subject:this.eduModel.sub,
  Class:this.eduModel.class1,
  AcademicYr:this.eduModel.year
}

var val4 = {
  Id:this.empModel.eid,
  EmpId:this.empModel.eid,
  Basic:this.basic,
  HRA:this.hra,
  TotalGross_Master:this.gross,
  RecordType:this.date
}


  this.service.addExperience(val2).subscribe(res=>{
    alert(res.toString());
  });

  this.service.addEducational(val3).subscribe(res=>{
    alert(res.toString());
  });

  this.service.addSalary(val4).subscribe(res=>{
    alert(res.toString());
  });
}

uploadPhoto(event){
  var file=event.target.files[0];
  const formData:FormData=new FormData();
  formData.append('uploadedFile',file,file.name);

  this.service.UploadPhoto(formData).subscribe((data:any)=>{
    this.pic=data.toString();
    this.PhotoFilePath=this.service.PhotoUrl+this.pic;
  });
}

}
