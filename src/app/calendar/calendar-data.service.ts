import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class CalendarDataService {
    data = new Subject<Date>();
    weeksSubject = new Subject<number[][]>();
    date = new Date();
    weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    month = this.date.getMonth();
    weeks!: number[][];
    highlitedDay = 0;
    get currentYear(): number {
        return this.date.getFullYear();
    }
    currentMonth(n: number = this.date.getMonth()): string {
        return this.months[n];
    }


    prevMonth(): Date {
        if (this.month === 0) {
            this.date.setMonth(12);
            this.date.setFullYear(this.date.getFullYear() - 1);
        }
        else {
            this.date.setMonth(this.date.getMonth() - 1);
        }
        this.data.next(this.date);
        return this.date;
    }
    nextMonth(): Date {
        if (this.month === 12) {
            this.date.setMonth(0);
            this.date.setFullYear(this.date.getFullYear() + 1);
        }
        else {
            this.date.setMonth(this.date.getMonth() + 1);
        }
        this.data.next(this.date);
        return this.date;
    }
    getfirstWeek(start: number, dayIndex: number): number[] {
        let nextDays = 1;
        const week = [];
        if (dayIndex !== 1) {
            for (let k = 0; k < 7; k++) {
                if (k < dayIndex) {
                    week.unshift(start - k);
                }
                else {
                    week.push(nextDays);
                    nextDays++;
                }
            }

        }
        return week;
    }
    getLastWeek(start: number, end: number): number[] {
        const lastWeek = [];
        let nextDays = 1;
        for (let l = start; l < start + 7; l++) {
            if (l > end) {
                lastWeek.push(nextDays);
                nextDays++;
            } else {
                lastWeek.push(l);
            }
        }
        return lastWeek;
    }
    getWeeks(): number[][] {
        const month = this.date.getMonth();
        const weeks = [];
        const lastDayOfthisMonth = new Date(this.date.getFullYear(), month + 1, 0).getDate();
        const lastDayOfPreviousMonth = new Date(this.date.getFullYear(), month, 0);
        const dayOfWeek = new Date(this.date.getFullYear(), month, 1);
        const firstWeek = this.getfirstWeek(lastDayOfPreviousMonth.getDate(), dayOfWeek.getDay() - 1);
        let firstDay = firstWeek[firstWeek.length - 1] ? firstWeek[firstWeek.length - 1] + 1 : 1;
        weeks.push(firstWeek);
        for (let k = firstDay; k <= lastDayOfthisMonth; k += 7) {
            const week = [];
            for (let e = firstDay; e < k; e++) {
                week.push(e);
            }
            weeks.push(week);
            firstDay = k;
        }
        if (firstDay !== lastDayOfthisMonth) {
            weeks.push(this.getLastWeek(firstDay, lastDayOfthisMonth));
        }

        this.weeks = weeks;
        this.weeksSubject.next(this.weeks);
        return this.weeks;
    }
}
