import { Component, inject } from '@angular/core';
import { TimerComponent } from '../../components/timer/timer.component';
import { TimerService } from '../../services/timer.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [TimerComponent,RouterLink],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.scss'
})
export class BlankComponent {

  timerService = inject(TimerService);
  router = inject(Router);
  timer$ = this.timerService.timer$;

  ngOnInit(): void {
    this.timer$.subscribe(time => {
      if(time == '00') {
        this.timerService.changeIsBlankPage(true);
        this.router.navigate(['/'])
      };
    })
  }
}
