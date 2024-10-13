import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.sass',
})
export class NotFoundComponent implements OnInit {
  ngOnInit() {
    window.location.replace(window.location.origin);
  }

  comeBackToHome() {
    window.location.href = '/';
  }
}
