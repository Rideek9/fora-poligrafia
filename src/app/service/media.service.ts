import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  public contactOpen = true;
  public contactElement = 'kontakt';
  public contactData = {
    phone: '507187527',
    email: 'damian.rabinski@fora-poligrafia.pl',
    address: {
      street: 'Sikorskiego',
      number: '5c',
      postCode: '05-119',
      city: 'Łajski',
      NIP: '536-19-41-034',
    },
  };

  private contactActive = new BehaviorSubject<string>('');
  contactActive$ = this.contactActive.asObservable();

  constructor() {}

  openContactPopup() {
    this.contactOpen = !this.contactOpen;
    this.contactElement = 'kontakt';
    if (this.contactOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll  ';
    }
  }

  clearData(item: string, event: MouseEvent) {
    event.stopPropagation();
    this.contactActive.next(item);
    this.contactActive$.subscribe((data: any) => {
      this.contactElement = data;
    });
  }
  openElementContact(item: string, event: MouseEvent) {
    event.stopPropagation();
    this.contactActive.next(item);
    this.contactActive$.subscribe((data: any) => {
      this.contactElement = data;
    });
  }
}
