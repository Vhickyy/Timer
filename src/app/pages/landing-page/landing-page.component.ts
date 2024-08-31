import { Component, inject } from '@angular/core';
import { TimerComponent } from '../../components/timer/timer.component';
import { Router, RouterLink } from '@angular/router';
import { TimerService } from '../../services/timer.service';
import { combineLatest, Subscription } from 'rxjs';

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
  isBlankPage$ = this.timerService.isBlankPage;
  private subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      combineLatest([this.timer$, this.isBlankPage$]).subscribe(([time, isBlankPage]) => {
        if (time === '00' && !isBlankPage) {
          this.router.navigate(['/another-page']);
        }
      })
    );
  }

  ngOnDestroy () : void {
    this.subscription.unsubscribe();
  }
    
}
