import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { Router } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('');
    }, 1000);
  })

  constructor(private service:SharedService, private route:Router, private modalService: NgbModal) {
    // setInterval(()=>{this.refreshEmpList()} ,1000);
   }

  EmployeeList:any=[];
  ExperienceList:any[];
  QualificationList:any[];

  searchGroup : any;

  emp:any;
  exp:any;
  ModalTitle:any;
  // dept:any;
  // i:any;

  ngOnInit(): void {
     this.refreshEmpList();
  }

  title = 'appBootstrap';
  searchText:any;
  gender:any;
  
  closeResult: string;

  filter(value : string) {
    console.log(value);

    this.EmployeeList = "";

    if(value == "ALL")
    {
      this.service.getEmployeeMaster().subscribe(data=>{
        this.EmployeeList=data;
      }); 
    }
    else
    {
      this.service.filterGender(value).subscribe(data=>{
        this.EmployeeList=data;
      });
    }
  }
  
  searchEmployee(){
    this.EmployeeList = "";

    this.service.SearchEmp(this.searchText).subscribe(data=>{
      this.EmployeeList=data;
    });
    console.log(this.EmployeeList);
  }

  open(content) {
    
    this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.ModalTitle = "ADD EMPLOYEE INFORMATION";
  }

  editClick(item,content){
    this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.ModalTitle = "EDIT EMPLOYEE INFORMATION";

    this.emp=item;  

    this.ModalTitle="Edit Employee";
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteEmployee(item.EmpId).subscribe(data=>{
        alert(data.toString());

        // this.refreshEmpList();
      });

      this.service.deleteEducation(item.EmpId).subscribe(data=>{
        alert(data.toString());

        // this.refreshEmpList();
      });

      this.service.deleteExperience(item.EmpId).subscribe(data=>{
        alert(data.toString());

        // this.refreshEmpList();
        // window.location.reload();
      });
    }
    location.reload();
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

  refreshEmpList(){
    this.service.getEmployeeMaster().subscribe(data=>{
      this.EmployeeList=data;
    });  
  }

  changePage(item){
    localStorage.setItem('empid',item);
    this.route.navigate(['/employee/eprofile']);
  }

}
