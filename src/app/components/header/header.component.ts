import { Component } from '@angular/core';
import { MediaService } from '../../service/media.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {
  textSlider = [
    {
      first: 'Ożywiamy twoją wizję',
      second: 'Kompleksowo zbudujemy wizerunek Twojej firmy',
    },
  ];

  constructor(public media: MediaService) {}
}
