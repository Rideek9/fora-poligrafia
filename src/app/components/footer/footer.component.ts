import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass',
})
export class FooterComponent {
  nanavigationFooter = [
    {
      name: 'polityka prywatności',
      url: '/polityka-prywatnosci',
      active: true,
    },
    {
      name: 'regulamin',
      url: '/regulamin',
      active: true,
    },
    {
      name: 'cennik',
      url: '/cennik',
      active: true,
    },
    {
      name: 'cookies',
      url: '/cookies',
      active: true,
    },
  ];
  protected readonly Date = Date;

  goToMainpage() {
    window.location.href = '/';
  }
}
