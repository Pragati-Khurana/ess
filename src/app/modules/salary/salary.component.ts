import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {
  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('');
    }, 1000);
  })

  constructor(private service:SharedService, private route:Router,private modalService: NgbModal) { }

  empname:any;
  fromdate:any;
  todate:any;
  SalaryList:any=[];

  searchText:string="";
  checkHead:any;

  ModalTitle:any;
  closeResult: string;


  ngOnInit(): void {
    
    if(localStorage.getItem('hid'))
    {
      this.checkHead = true;
    }
    else
    {
      this.checkHead = false;
    }

    if(this.checkHead==true)
    {
      this.refreshSalaryListall();
    }
    else
    {
      this.refreshSalaryList();
    }
    
  }

//employee side

  refreshSalaryList()
  {
    this.service.getSalaryList(localStorage.getItem('empid')).subscribe(data=>{
      this.SalaryList=data;

      this.empname=this.SalaryList[0]['EmpName'];
      this.fromdate=null;
      this.todate=null;

    }); 
  }

  newlist()
  {
    this.service.getSearchSalaryDateWise(localStorage.getItem('empid'),this.fromdate,this.todate).subscribe(data=>{
      this.SalaryList=data;
    });
  }

  refreshSalaryListall()
  {
    this.service.getFullSalaryList().subscribe(data=>{
      this.SalaryList=data;
     });  

    this.searchText='';    
    this.fromdate=null;
    this.todate=null;
  }


  afterSearchSalaryDateWise()
  {
      this.service.SearchByNameDateSalary(this.searchText,this.fromdate,this.todate).subscribe(data=>{
            this.SalaryList=data;
          });
  }

  searchEmployee(){
    this.SalaryList = "";

    this.service.SearchEmpSalary(this.searchText).subscribe(data=>{
      this.SalaryList=data;
    });
    // console.log(this.AttendanceList);
  }


  open(content) {
    
    this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.ModalTitle = "EDIT SALARY INFORMATION";
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

  // editClick(item,content){
  //   this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  //   this.ModalTitle = "EDIT SALARY INFORMATION";

  //   this.emp=item;  

  //   this.ModalTitle="Edit Employee";
  // }


}
