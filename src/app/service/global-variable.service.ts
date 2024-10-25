import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GlobalVariableService implements OnInit {
  urlAddres = 'https://admin.fora-poligrafia.pl';
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

  navigation = [
    {
      name: 'o nas',
      url: '#about',
      active: true,
    },
    {
      name: 'specjalności',
      active: true,
      url: '#expirence',
    },
    {
      name: 'zaufali nam',
      url: '#trust-us',
      active: true,
    },
    {
      name: 'portfolio',
      url: '/portfolio',
      active: true,
    },
  ];

  imageSection = [
    { alt: 'some txt', url: 'image/HeaderFirstImg.jpg', center: false },
    { alt: 'some txt', url: 'image/HeaderFirstImg.jpg', center: false },
    { alt: 'some txt', url: 'image/HeaderFirstImg.jpg', center: true },
    { alt: 'some txt', url: 'image/HeaderFirstImg.jpg', center: false },
    { alt: 'some txt', url: 'image/HeaderFirstImg.jpg', center: false },
  ];

  dataImage: any;

  private showMoreElementText = new BehaviorSubject<string>('');
  showMoreElementText$ = this.showMoreElementText.asObservable();
  private activePOP = new BehaviorSubject<boolean>(false);
  activePOP$ = this.activePOP.asObservable();
  private idElement = new BehaviorSubject<string>('');
  idElement$ = this.idElement.asObservable();
  private dataPopup = new BehaviorSubject<[]>([]);
  dataPopup$ = this.dataPopup.asObservable();
  private socialIcon = new BehaviorSubject<[]>([]);
  socialIcon$ = this.socialIcon.asObservable();

  constructor(private http: HttpClient) {}

  seeMorePopap(index: any) {
    this.showMoreElementText.next(index);
    this.activePOP.next(true);
  }

  closePopap(index: any) {
    this.activePOP.next(index);
  }

  takeIDElement(index: any) {
    this.idElement.next(index);
    const data = this.http.get(
      `${this.urlAddres}/api/menu-foras/${index}?populate=*`,
    );
    data.subscribe((data: any) => {
      this.dataPopup.next(data);
    });
  }

  cleanPopapData() {
    this.dataPopup.next([]);
  }

  ngOnInit() {
    // @ts-ignore
    this.socialIcon.next(this.socials);
  }
}
