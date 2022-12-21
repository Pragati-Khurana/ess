import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from '../../../../shared.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {
  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('');
    }, 1000);
  })

  constructor(private ser: SharedService,private modalService: NgbModal) { 
    setInterval(()=>{this.refreshFamilyList()} ,1000);
  }

  FamilyList:any;
  FList:any;
  closeResult: string;

  ModalTitle:any;
  checkHead:any;

  ngOnInit(): void {
    this.refreshFamilyList();  
    if(localStorage.getItem('hid'))
    {
      this.checkHead = true;
    }
    else
    {
      this.checkHead = false;
    }  
  }

  refreshFamilyList(){
    this.ser.getFamilyDetails(localStorage.getItem('empid')).subscribe(data=>{
      this.FamilyList=data;
    });
  }


    editFamily(item,content){
      this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      this.ModalTitle = "EDIT FAMILY INFORMATION";
      
      this.FList = item;
      // console.log(this.FList);
    }
    
    // displayFamilyD(){
    //   this.ser.getFamilyDetails(this.emp.EmpId).subscribe(data=>{
    //     this.FamilyList=data;
    //   });
    // }

    deleteF(item){
      if(confirm('Are you sure?')){
        this.ser.deleteFamily(item.FDId).subscribe(data=>{
          alert(data.toString());
        });
      }
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