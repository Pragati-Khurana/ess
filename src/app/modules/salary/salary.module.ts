import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryComponent } from './salary.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  declarations: [SalaryComponent],
  imports: [
    CommonModule,
    FormsModule,
    InlineSVGModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild([
      {
        path: '',
        component: SalaryComponent,
      },
    ]),
  ],
})
export class SalaryModule { }
