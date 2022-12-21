import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EProfileRoutingModule } from './e-profile-routing.module';
import { ContactDComponent } from './contact-d/contact-d.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FamilyComponent } from './family/family.component';
import { EducationalComponent } from './educational/educational.component';
import { ExperienceComponent } from './experience/experience.component';
import { SalaryComponent } from './salary/salary.component';
import { EditContactDComponent } from './edit-contact-d/edit-contact-d.component';
import { EditFamilyDComponent } from './edit-family-d/edit-family-d.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { EditEducationalDComponent } from './edit-educational-d/edit-educational-d.component';
import { EditExperienceDComponent } from './edit-experience-d/edit-experience-d.component';

@NgModule({
  declarations: [ContactDComponent, FamilyComponent, EducationalComponent, ExperienceComponent, SalaryComponent, EditContactDComponent, EditFamilyDComponent, EditEducationalDComponent, EditExperienceDComponent],
  imports: [
    CommonModule,
    EProfileRoutingModule,
    InlineSVGModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EProfileModule { }
