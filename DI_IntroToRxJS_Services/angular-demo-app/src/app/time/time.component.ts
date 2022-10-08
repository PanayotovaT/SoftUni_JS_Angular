import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnDestroy{
  timeStreamSubscription!: Subscription;

  time$ = interval(1000).pipe(map(() => new Date()));

  timeValue!: Date;

  constructor() { 
    this.timeStreamSubscription = this.time$.subscribe(timeValue => this.timeValue = timeValue );
  }

  ngOnDestroy(): void {
    this.timeStreamSubscription.unsubscribe();
  }

}
