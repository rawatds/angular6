import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal/personal.component';
import { ProfessionalComponent } from './professional/professional.component';
import {FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [PersonalComponent, ProfessionalComponent],
  exports: [PersonalComponent, ProfessionalComponent]
})
export class ProfileModule { }
