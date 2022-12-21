import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeeComponent} from './employee.component';
import {EProfileComponent} from './e-profile/e-profile.component';
import {DisplayComponent} from './display/display.component';

// import {EProfileModule} from '';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () =>
          import('./e-profile/e-profile.module').then((m) => m.EProfileModule),
      },
      {
        path: 'eprofile',
        component: EProfileComponent,
      },
      {
        path: 'display',
        component: DisplayComponent,
      },
      {
        path: '',
        component: DisplayComponent,
      },
  
      { path: '', redirectTo: 'employee', pathMatch: 'full' },
      { path: '**', redirectTo: 'employee', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
