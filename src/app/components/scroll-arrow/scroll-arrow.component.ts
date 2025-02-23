import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-arrow',
  standalone: true,
  imports: [],
  templateUrl: './scroll-arrow.component.html'
})
export class ScrollArrowComponent {
  scrollDown() {
    window.scrollBy({
      top: window.innerHeight, // Baja exactamente una pantalla
      behavior: 'smooth' // Agrega una animación suave
    });
  }
}
