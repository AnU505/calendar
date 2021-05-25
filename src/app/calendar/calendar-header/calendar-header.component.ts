import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalendarDataService } from '../calendar-data.service';


@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss']
})
export class CalendarHeaderComponent implements OnInit, OnDestroy {
  weekDays!: string[];
  currentMonth!: string;
  date!: Date;
  subscription!: Subscription;
  constructor(private Data: CalendarDataService) {
  }

  ngOnInit(): void {
    this.date = this.Data.date;
    this.weekDays = this.Data.weekDays;
    this.currentMonth = this.Data.currentMonth();
    this.subscription = this.Data.data.subscribe(next => {
      this.currentMonth = this.Data.currentMonth(next.getMonth());
    });


  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
