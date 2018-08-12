import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { ChildEmployeeComponent } from './child-employee/child-employee.component';
import { ProfileModule } from './profile/profile.module';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    AddressCardComponent,
    ChildEmployeeComponent
  ],
  imports: [
    BrowserModule, FormsModule, ProfileModule, HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
