import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../../shared.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-educational',
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.scss']
})
export class EducationalComponent implements OnInit {

  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('');
    }, 1000);
  })

  constructor(private ser: SharedService,private modalService: NgbModal) { }

  deg:String;
  sub:String;
  class:String;
  year:String;
  eduList:any=[];

  closeResult: string;

  ModalTitle:any;
  checkHead:any;

  ngOnInit(): void {
    this.educationDetails();
    if(localStorage.getItem('hid'))
    {
      this.checkHead = true;
    }
    else
    {
      this.checkHead = false;
    }
  }

  educationDetails()
  {
      this.ser.getEducationDetails(localStorage.getItem('empid')).subscribe(data=>{
      this.eduList=data;

      this.deg = this.eduList[0]['Qualification'];
      this.sub = this.eduList[0]['Subject'];
      this.class = this.eduList[0]['Class'];
      this.year = this.eduList[0]['AcademicYr'];
    });
  }
  open(content) {
    
    this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.ModalTitle = "EDIT EDUCATIONAL INFORMATION";
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
  
}
