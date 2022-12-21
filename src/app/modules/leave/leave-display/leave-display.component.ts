import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-leave-display',
  templateUrl: './leave-display.component.html',
  styleUrls: ['./leave-display.component.scss']
})
export class LeaveDisplayComponent implements OnInit {

  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('');
    }, 1000);
  })

  constructor(private service: SharedService, private route:Router, private modalService: NgbModal) { }

  leaveList:any;
  closeResult: string;
  ModalTitle:any;
  leave:any;

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(){
    this.service.getLEntry2().subscribe((data:any)=>{
      this.leaveList=data;
    });
  }

  open(content) {
    
    this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.ModalTitle = "EDIT LEAVE DETAILS";
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

  editClick(item,content){
    this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.ModalTitle = "EDIT LEAVE INFORMATION";

    this.leave=item;  
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteLeaveEntry2(item.Id).subscribe(data=>{
        alert(data.toString());
      });
    }
    location.reload();
  }
}
