import { Component } from '@angular/core';
import { MediaService } from '../../service/media.service';

@Component({
  selector: 'app-integration-component',
  standalone: true,
  imports: [],
  templateUrl: './integration-component.component.html',
  styleUrl: './integration-component.component.sass',
})
export class IntegrationComponentComponent {
  socials = [
    {
      name: 'facebook',
      icon: 'fa-brands fa-facebook-f',
    },
    {
      name: 'instagram',
      icon: 'fa-brands fa-instagram',
    },
  ];

  constructor(public media: MediaService) {}
}
