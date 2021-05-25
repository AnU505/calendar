import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarHeaderComponent } from './calendar/calendar-header/calendar-header.component';
import { CalendarBodyComponent } from './calendar/calendar-body/calendar-body.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CalendarControlsComponent } from './calendar/calendar-header/calendar-controls/calendar-controls.component';
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    CalendarBodyComponent,
    CalendarControlsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
