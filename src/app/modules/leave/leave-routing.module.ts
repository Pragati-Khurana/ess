import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveComponent } from './leave.component';
import { LeaveDisplayComponent } from './leave-display/leave-display.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';

const routes: Routes = [
  {
    path: '',
    component: LeaveComponent,
    children: [
      {
        path: 'displayLeave',
        component: LeaveDisplayComponent,
      },
      {
        path: 'requestLeave',
        component: LeaveRequestComponent,
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

export class LeaveRoutingModule { }
