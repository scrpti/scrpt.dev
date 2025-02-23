import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollArrowComponent } from './components/scroll-arrow/scroll-arrow.component';
import { MeComponent } from './components/me/me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScrollArrowComponent, MeComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'scrpt';
}
