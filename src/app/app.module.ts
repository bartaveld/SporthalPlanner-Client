import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { BookingService } from './services/booking.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BarComponent } from './components/bar/bar.component';
import { NavbarService } from './services/navbar.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PlanComponent } from './components/plan/plan.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { WorkComponent } from './components/work/work.component';
import { TimeComponent } from './components/time/time.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import { OpeningHoursService } from './services/openinghours.service';
import { OpeninghoursComponent } from './components/time/openinghours/openinghours.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BarComponent,
    HomeComponent,
    PlanComponent,
    CalendarComponent,
    WorkComponent,
    TimeComponent,
    LoginComponent,
    OpeninghoursComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NavbarService, BookingService, OpeningHoursService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
