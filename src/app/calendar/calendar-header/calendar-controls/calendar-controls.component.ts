import { Component, Input, OnInit } from '@angular/core';
import { CalendarDataService } from '../../calendar-data.service';

@Component({
  selector: 'app-calendar-controls',
  templateUrl: './calendar-controls.component.html',
  styleUrls: ['./calendar-controls.component.scss']
})
export class CalendarControlsComponent implements OnInit {
  @Input() classes!: string[];
  constructor(private calendarDataService: CalendarDataService) { }

  ngOnInit(): void {
  }
  onPrevious(): void {
    this.calendarDataService.prevMonth();
    this.calendarDataService.getWeeks();
  }
  onNext(): void {
    this.calendarDataService.nextMonth();
    this.calendarDataService.getWeeks();

  }
}
