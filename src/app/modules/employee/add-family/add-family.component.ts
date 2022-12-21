import { Component, OnInit, Input} from '@angular/core';
import {SharedService} from '../../../shared.service';

@Component({
  selector: 'app-add-family',
  templateUrl: './add-family.component.html',
  styleUrls: ['./add-family.component.scss']
})
export class AddFamilyComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() empid:any;
  // eid:any;
  mname:any;
  dob:any;
  relation:any;


  ngOnInit(): void {
    
  }

  addFamilyD(){
    var fval={
      EmpId:this.empid,
      MemberName:this.mname,
      DOB:this.dob,
      RelationWithEmp:this.relation
    };
    this.service.addFamily(fval).subscribe(res=>{
      alert(res.toString());
    });
  }

}
