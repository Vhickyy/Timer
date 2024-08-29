import { Component, inject } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  timerService = inject(TimerService);
  router = inject(Router);
  timer$ = this.timerService.timer$;

  ngOnInit(): void {

    this.timerService.startCountdown();
  
  }
}
