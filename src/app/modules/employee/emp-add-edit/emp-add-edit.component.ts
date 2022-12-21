import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from '../../../shared.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {

  constructor(private service: SharedService, private modalService: NgbModal) { 
    setInterval(()=>{this.displayFamilyD()} ,1000);
    setInterval(()=>{this.displaySalaryD()} ,1000);
  }

  @Input() emp:any;
  exp:any=[];
  edu:any[];

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
  class:any;
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

      for(this.i=0;this.i<this.dept.length;this.i++)
      {
        if(this.dept[this.i]['DeptId']==this.emp.DeptId)
        {
          this.department = this.dept[this.i]['DeptName'];
        }
      }

    this.eid = this.emp.EmpId;
    this.ename = this.emp.EmpName;
    this.dob = this.emp.DOB;
    this.gender = this.emp.Gender;
    // this.dept = this.emp.DeptId;
    this.bgrp = this.emp.BloodGroup;
    this.category = this.emp.Category;
    this.designation = this.emp.Designation;
    this.pic = this.emp.Img;
    this.PhotoFilePath=this.service.PhotoUrl+this.pic;

    //contact details
    this.line1 = this.emp.Add1;
    this.line2 = this.emp.Add2;
    this.city = this.emp.City;
    this.state = this.emp.State;
    this.country = this.emp.Country;
    this.mobno = this.emp.MobNo;
    
    
    this.basic = this.emp.Basic;
    this.hra = this.emp.hra;
    this.gross = this.emp.TotalGross_Master;
    this.date = this.emp.RecordType;
  });

  //experience details
  this.service.getExperienceDetails(this.emp.EmpId).subscribe(data=>{
    this.exp=data;
    
    this.srno = this.exp[0]['SrNo'];
    this.doj = this.exp[0]['DOJ'];
    this.dol = this.exp[0]['DOL'];
    this.expmon = this.exp[0]['ExpMon'];
  });

  //educational details
  this.service.getEducationDetails(this.emp.EmpId).subscribe(data=>{
    this.edu=data;

  this.degree = this.edu[0]['Qualification'];
  this.sub = this.edu[0]['Subject'];
  this.class = this.edu[0]['Class'];
  this.year = this.edu[0]['AcademicYr'];
  });

}

addFamily(content){
  this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  this.ModalTitle = "ADD FAMILY INFORMATION";
  this.empid = this.eid;
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
    var val = {EmpId:this.eid,
      EmpName:this.ename,
      DOB:this.dob,
      Gender:this.gender,
      DeptId:this.d,
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
  this.service.addEmployee(val).subscribe(res=>{
    alert(res.toString());
  });
  });  

  

var val2 = {
  EmpId:this.eid,
  SrNo:this.srno,
  DOJ:this.doj,
  DOL:this.dol,
  ExpMon:this.expmon
}

var val3 = {
  EmpId:this.eid,
  Qualification:this.degree,
  Subject:this.sub,
  Class:this.class,
  AcademicYr:this.year
}

var val4 = {
  Id:this.eid,
  EmpId:this.eid,
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

selectBG(event: any){
  this.bgrp = event.target.value;
}

selectGender(event: any){
  this.gender = event.target.value;
}

updateEmployee(){
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
    var uval = {EmpId:this.eid,
      EmpName:this.ename,
      DOB:this.dob,
      Gender:this.gender,
      DeptId:this.d,
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
  });  

  // alert(this.d);
  

var uval2 = {
  EmpId:this.eid,
  SrNo:this.srno,
  DOJ:this.doj,
  DOL:this.dol,
  ExpMon:this.expmon
}

var uval3 = {
  EmpId:this.eid,
  Qualification:this.degree,
  Subject:this.sub,
  Class:this.class,
  AcademicYr:this.year
}



this.service.updateExperience(uval2).subscribe(res=>{
  alert(res.toString());
  }); 
  
this.service.updateEducation(uval3).subscribe(res=>{
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
