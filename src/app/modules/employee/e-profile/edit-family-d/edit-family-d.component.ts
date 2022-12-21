import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from '../../../../shared.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-family-d',
  templateUrl: './edit-family-d.component.html',
  styleUrls: ['./edit-family-d.component.scss']
})
export class EditFamilyDComponent implements OnInit {

  constructor(private service: SharedService,private modalService: NgbModal) { }

  @Input() FList:any;
  mname:any;
  dob:any;
  relation:any;

  ngOnInit(): void {
    this.loadForm();
  }
  
  loadForm(){
    this.mname = this.FList.MemberName,
    this.dob = this.FList.DOB.toString().substr(0,10),
    this.relation = this.FList.RelationWithEmp
    // console.log(this.FList);

  }

  
  editFamilyD(){
    var fval={
      MemberName:this.mname,
      DOB:this.dob,
      RelationWithEmp:this.relation,
      FDId:this.FList.FDId
    };
    this.service.updateFamily(fval).subscribe(res=>{
      alert(res.toString());
    });
  }
}
