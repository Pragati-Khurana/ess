import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { DisplayComponent } from './display/display.component';
import { InlineSVGModule } from 'ng-inline-svg';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { AddFamilyComponent } from './add-family/add-family.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { EditFamilyComponent } from './edit-family/edit-family.component';
import { EditSalaryComponent } from './edit-salary/edit-salary.component';

// import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [DisplayComponent, EmpAddEditComponent, AddFamilyComponent, AddSalaryComponent, AddEmpComponent, EditEmpComponent, EditFamilyComponent, EditSalaryComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    InlineSVGModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
