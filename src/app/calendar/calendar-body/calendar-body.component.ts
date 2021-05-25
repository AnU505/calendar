import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalendarDataService } from '../calendar-data.service';

@Component({
  selector: 'app-calendar-body',
  templateUrl: './calendar-body.component.html',
  styleUrls: ['./calendar-body.component.scss']
})
export class CalendarBodyComponent implements OnInit, OnDestroy {
  weeks!: number[][];
  today!: number;
  id = new Date().getTime();
  month!: string;
  subscription!: Subscription;
  constructor(private calendarDataService: CalendarDataService) { }

  ngOnInit(): void {
    this.weeks = this.calendarDataService.getWeeks();
    this.month = this.calendarDataService.currentMonth();
    this.today = new Date().getDate();
    this.subscription = this.calendarDataService.weeksSubject.subscribe(next => {
      this.weeks = next;
    });
  }

  onClick(span: HTMLSpanElement): void {
    const id = new Date().getTime();
    span.id = `${id}`;
    this.id = id;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
