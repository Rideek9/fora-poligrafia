import { Component } from '@angular/core';
import { MediaService } from '../../service/media.service';

@Component({
  selector: 'app-popup-contact',
  standalone: true,
  imports: [],
  templateUrl: './popup-contact.component.html',
  styleUrl: './popup-contact.component.sass',
})
export class PopupContactComponent {
  phoneNumber = this.media.contactData.phone.replace(/(\d{3})(?=\d)/g, '$1  ');

  constructor(public media: MediaService) {}
}
