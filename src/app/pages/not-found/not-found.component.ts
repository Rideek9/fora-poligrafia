import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.sass',
})
export class NotFoundComponent {
  comeBackToHome() {
    window.location.href = '/';
  }
}