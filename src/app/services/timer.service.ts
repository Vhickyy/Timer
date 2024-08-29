import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, Observable, Subscription, takeWhile } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TimerService {
  private countdownTime: number = 10; // Initial countdown time in seconds
  private timerSubject: BehaviorSubject<number | string> = new BehaviorSubject<number | string>(this.countdownTime);
  private timerSubscription: Subscription | null = null;

  timer$: Observable<number | string> = this.timerSubject.asObservable();

  startCountdown(): void {
    this.stopCountdown();
    this.timerSubscription = interval(1000)
      .pipe(
        takeWhile(() => this.countdownTime > 0),
        map(() => --this.countdownTime)
      )
      .subscribe({
        next: (value) => {
          if(value >= 10){
            this.timerSubject.next(value)
          }else{
            this.timerSubject.next(`0${value}`)
          }
        },
        complete: () => this.timerSubject.next('00'),
      });
  }

  private stopCountdown(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
  }

}