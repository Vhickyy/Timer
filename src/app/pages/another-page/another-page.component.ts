import { Component } from '@angular/core';
import { TimerComponent } from '../../components/timer/timer.component';

@Component({
  selector: 'app-another-page',
  standalone: true,
  imports: [TimerComponent],
  templateUrl: './another-page.component.html',
  styleUrl: './another-page.component.scss'
})
export class AnotherPageComponent {

}
