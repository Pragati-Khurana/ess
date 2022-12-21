import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LeaveComponent } from './leave.component';
import { RouterModule } from '@angular/router';
import { LeaveComponent } from './leave.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { LeaveDisplayComponent } from './leave-display/leave-display.component';
import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { EditLeaveComponent } from './edit-leave/edit-leave.component';

@NgModule({
  declarations: [LeaveComponent, LeaveDisplayComponent, LeaveRequestComponent, EditLeaveComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    InlineSVGModule,
    LeaveRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: LeaveComponent,
      },
    ]),
  ],
})
export class LeaveModule { }
