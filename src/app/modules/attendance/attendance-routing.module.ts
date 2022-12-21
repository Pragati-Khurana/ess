import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance.component';
import { DailyAttendanceComponent } from './daily-attendance/daily-attendance.component';
import { MonthlyAttendanceComponent } from './monthly-attendance/monthly-attendance.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  {
    path: '',
    component: AttendanceComponent,
    children: [
      {
        path: 'daily',
        component: DailyAttendanceComponent,
      },
      {
        path: 'monthly',
        component: MonthlyAttendanceComponent,
      },
      {
        path: 'pendingRequest',
        component: RequestComponent,
      },
      {
        path: '',
        component: DailyAttendanceComponent,
      },
  
      { path: '', redirectTo: 'attandance', pathMatch: 'full' },
      { path: '**', redirectTo: 'attandance', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AttendanceRoutingModule { }
