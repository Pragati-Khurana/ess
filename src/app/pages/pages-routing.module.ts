import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'employee',
        loadChildren: () =>
          import('../modules/employee/employee.module').then((m) => m.EmployeeModule),
      },
      {
        path: 'leave',
        loadChildren: () =>
          import('../modules/leave/leave.module').then((m) => m.LeaveModule),
      },
      {
        path: 'attandance',
        loadChildren: () =>
          import('../modules/attendance/attendance.module').then((m) => m.AttendanceModule),
      },
      {
        path: 'salary',
        loadChildren: () =>
          import('../modules/salary/salary.module').then((m) => m.SalaryModule),
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
