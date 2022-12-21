import { Component, OnInit } from '@angular/core';
// import { SharedService } from 'Src/app/shared.service';
import {SharedService} from '../../../../shared.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-d',
  templateUrl: './contact-d.component.html',
  styleUrls: ['./contact-d.component.scss']
})
export class ContactDComponent implements OnInit {

  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('');
    }, 1000);
  })

  constructor(private ser: SharedService,private modalService: NgbModal) {

   }

  line1:String;
  line2:String;
  city:String;
  state:String;
  country:String;
  mobno:String;
  conList:any;
  emp:any;

  closeResult: string;

  ModalTitle:any;
  checkHead:any;


  ngOnInit(): void {
    this.ContactDetails();
    if(localStorage.getItem('hid'))
    {
      this.checkHead = true;
    }
    else
    {
      this.checkHead = false;
    }
}

ContactDetails()
{
  this.ser.getContactDetails(localStorage.getItem('empid')).subscribe(data=>{
    this.conList=data;

    this.line1 = this.conList[0]['Add1'];
    this.line2 = this.conList[0]['Add2'];
    this.city = this.conList[0]['City'];
    this.state = this.conList[0]['State'];
    this.country = this.conList[0]['Country'];
    this.mobno = this.conList[0]['MobNo'];
  });
}


// open(content) {
    
//   this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
//     this.closeResult = `Closed with: ${result}`;
//   }, (reason) => {
//     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//   });
//   this.ModalTitle = "EDIT CONTACT INFORMATION";
// }

editClick(content){
  this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });

  this.ModalTitle = "EDIT CONTACT INFORMATION";
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
