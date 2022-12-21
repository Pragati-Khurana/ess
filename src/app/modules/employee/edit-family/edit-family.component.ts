import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from '../../../shared.service';


@Component({
  selector: 'app-edit-family',
  templateUrl: './edit-family.component.html',
  styleUrls: ['./edit-family.component.scss']
})
export class EditFamilyComponent implements OnInit {

  constructor(private service: SharedService) { }

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
