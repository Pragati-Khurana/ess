import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-e-profile',
  templateUrl: './e-profile.component.html',
  styleUrls: ['./e-profile.component.scss']
})
export class EProfileComponent implements OnInit {

  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('');
    }, 1000);
  })

  constructor(private service:SharedService, private modalService: NgbModal, private route:Router) { }

  
  closeResult: string;

  empList:any=[];
  ename:any;
  fname:any;
  mname:any;
  dob:any;
  gender:any;
  dept:any;
  i:any;
  panno:any;
  aadharno:any;
  bloodgroup:any;
  maritalstatus:any;
  empcode:any;
  cardno:any;
  oldcode:any;
  department:any;
  cat:any;
  paymode:any;
  bankname:any;
  acno:any;
  ifsc:any;
  eid:any;
  pic:any;
  PhotoFilePath:string;

  ModalTitle:any;



  //edit employee

  // @Input() emp:any;
  emp:any=[];

  empid:any;
  empname:any;
  empdob:any;
  empgender:any;
  empdept:any;
  empd:any;
  empdepartment:any;
  empbgrp:any;
  empcategory:any;
  emppic:string;
  empPhotoFilePath:string;

  line1:any;
  line2:any;
  city:any;
  state:any;
  country:any;
  mobno:any;
  checkHead:any;
  
  ngOnInit(): void {
    this.EmployeeDetails();


    this.loadDeptList();

    if(localStorage.getItem('hid'))
    {
      this.checkHead = true;
    }
    else
    {
      this.checkHead = false;
    }
  }

  EmployeeDetails(){
    this.service.getEmployeeDetails(localStorage.getItem('empid')).subscribe(data=>{
      this.empList=data;

    this.service.getDepartmentNames().subscribe((data:any)=>{
      this.dept=data;

      for(this.i=0;this.i<this.dept.length;this.i++)
      {
        if(this.dept[this.i]['DeptId']==this.empList[0]['DeptId'])
        {
          this.department = this.dept[this.i]['DeptName'];
        }
      }

      
      this.eid = this.empList[0]['EmpId'];
      this.ename = this.empList[0]['EmpName'];
      this.fname = this.empList[0]['FatherName'];
      this.mname = this.empList[0]['MotherName'];
      this.dob = this.empList[0]['DOB'].toString();
      this.dob = this.dob.substr(0,10);
      this.gender = this.empList[0]['Gender'];
      this.panno = this.empList[0]['PANNo'];
      this.aadharno = this.empList[0]['AadharNo'];
      this.bloodgroup = this.empList[0]['BloodGroup'];
      this.maritalstatus = this.empList[0]['MaritalStatus'];
      this.empcode = this.empList[0]['EmpCode'];
      // this.cardno = this.empList[0][''];
      this.oldcode = this.empList[0]['EmpCode2'];
      // this.department = this.empList[0]['DeptId'];
      this.cat = this.empList[0]['Category'];
      this.pic = this.empList[0]['Img'];;
    this.PhotoFilePath=this.service.PhotoUrl+this.pic;
      // this.ifsc = this.empList[0][''];
      });
    });
  }

  open(content) {
    
    this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.ModalTitle = "EDIT PERSONAL INFORMATION";
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






//edit employee

loadDeptList()
  {
    this.service.getDepartmentNames().subscribe((data:any)=>{
      this.empdept=data;

      this.empid=localStorage.getItem('empid');
      this.service.getEmployeeDetails(this.empid).subscribe(data=>{
        this.emp=data;

        for(this.i=0;this.i<this.empdept.length;this.i++)
        {
          if(this.empdept[this.i]['DeptId']==this.emp[0]['DeptId'])
          {
            this.empdepartment = this.empdept[this.i]['DeptName'];
          }
        }

    this.empid = this.emp[0]['EmpId'];
    this.empname = this.emp[0]['EmpName'];

    this.empdob = this.emp[0]['DOB'].toString();
    this.empdob = this.empdob.substr(0,10);
    this.empgender = this.emp[0]['Gender'];
    this.empbgrp = this.emp[0]['BloodGroup'];
    this.empcategory = this.emp[0]['Category'];

    this.emppic = this.emp[0]['Img'];;
    this.empPhotoFilePath=this.service.PhotoUrl+this.emppic;

    this.line1 = this.emp[0]['Add1'];
      this.line2 = this.emp[0]['Add2'];
      this.city = this.emp[0]['City'];
      this.state = this.emp[0]['State'];
      this.country = this.emp[0]['Country'];
      this.mobno = this.emp[0]['MobNo'];
  });
});
  }


  empuploadPhoto(event)
  {
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
  
    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.emppic=data.toString();
      this.empPhotoFilePath=this.service.PhotoUrl+this.emppic;
    });
  }

updateEmployee()
{
  this.service.getDepartmentNames().subscribe((data:any)=>{
    this.empdept=data;

    for(this.i=0;this.i<this.empdept.length;this.i++)
    {
      // alert(this.dept[this.i]['DeptName']);
      if(this.empdept[this.i]['DeptName']==this.empdepartment)
      {
        this.empd = this.empdept[this.i]['DeptId'];
        break;
      }
    }
    var uval = {EmpId:this.empid,
      EmpName:this.empname,
      DOB:this.empdob,
      Gender:this.empgender,
      DeptId:this.empd,
      BloodGroup:this.empbgrp,
      Category:this.empcategory,
      Img:this.emppic,
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

}}
  


