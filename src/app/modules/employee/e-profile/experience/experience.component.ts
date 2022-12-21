import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../../shared.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('');
    }, 1000);
  })

  constructor(private ser:SharedService,private modalService: NgbModal) { }

  srno:number;
  doj:any;
  dol:any;
  designation:any;
  expmon:any;
  experList:any=[];
  desig:any;
  checkHead:any;

  closeResult: string;

  ModalTitle:any;

  ngOnInit(): void {
    this.ExperienceDetails();
    if(localStorage.getItem('hid'))
    {
      this.checkHead = true;
    }
    else
    {
      this.checkHead = false;
    }
  }

  ExperienceDetails(){

    this.ser.getExperienceDetails(localStorage.getItem('empid')).subscribe(data=>{
      this.experList=data;

      this.ser.getDesignationDetails(localStorage.getItem('empid')).subscribe(data2=>{
        this.desig=data2;
         
    
      console.log(this.experList[0]['SrNo']);

      this.srno = this.experList[0]['SrNo'];
      this.doj = this.experList[0]['DOJ'].toString().substr(0,10);
      this.dol = this.experList[0]['DOL'].toString().substr(0,10);
      this.designation = this.desig[0]['Designation'];
      this.expmon = this.experList[0]['ExpMon'];
      });
    });
  }

  open(content) {
    
    this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.ModalTitle = "EDIT EXPERIENCE INFORMATION";
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
