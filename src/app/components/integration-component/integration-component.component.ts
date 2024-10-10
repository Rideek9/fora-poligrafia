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
      addresURL: 'https://www.facebook.com/FORADAMIANRABINSKI',
    },
    {
      name: 'instagram',
      icon: 'fa-brands fa-instagram',
      addresURL: 'https://www.instagram.com/fora_poligrafia/',
    },
  ];

  constructor(public media: MediaService) {}
}
