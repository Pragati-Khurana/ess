import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EProfileComponent} from './e-profile.component';
import {ContactDComponent} from './contact-d/contact-d.component';
import {FamilyComponent} from './family/family.component';
import {EducationalComponent} from './educational/educational.component';
import {ExperienceComponent} from './experience/experience.component';
import {SalaryComponent} from './salary/salary.component';
// import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: EProfileComponent,
    children: [
      {
        path: 'contactd',
        component: ContactDComponent,
      },
      {
        path: 'family',
        component: FamilyComponent,
      },
      {
        path: 'education',
        component: EducationalComponent,
      },
      {
        path: 'experience',
        component: ExperienceComponent,
      },
      {
        path: 'salary',
        component: SalaryComponent,
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
export class EProfileRoutingModule { }
