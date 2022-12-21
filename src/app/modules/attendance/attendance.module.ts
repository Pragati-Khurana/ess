import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';
import { DailyAttendanceComponent } from './daily-attendance/daily-attendance.component';
import { MonthlyAttendanceComponent } from './monthly-attendance/monthly-attendance.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddAttandanceComponent } from './add-attandance/add-attandance.component';
import { RequestComponent } from './request/request.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { EditDailyAttendanceComponent } from './edit-daily-attendance/edit-daily-attendance.component';

@NgModule({
  declarations: [AttendanceComponent, DailyAttendanceComponent, MonthlyAttendanceComponent, AddAttandanceComponent, RequestComponent, EditDailyAttendanceComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    InlineSVGModule,
    FormsModule
    ]
})
export class AttendanceModule { }
