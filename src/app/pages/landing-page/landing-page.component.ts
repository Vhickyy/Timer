import { Component, inject } from '@angular/core';
import { TimerComponent } from '../../components/timer/timer.component';
import { Router, RouterLink } from '@angular/router';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TimerComponent,RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  timerService = inject(TimerService); 
  router = inject(Router);
  timer$ = this.timerService.timer$;
  isBlankPage = this.timerService.isBlankPage;

  ngOnInit(): void {
    this.timer$.subscribe(time => {
      this.isBlankPage.subscribe(val => {
        if(time == '00' && !val) this.router.navigate(['/another-page']);
      })
    })
    }
}
