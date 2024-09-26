import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.sass',
})
export class NavigationComponent implements OnInit {
  // data navigation
  navigation = [
    {
      name: 'o nas',
      url: 'about',
      active: true,
    },
    {
      name: 'specjalności',
      active: true,
      url: 'expirence',
    },
    {
      name: 'zaufali nam',
      url: 'trust-us',
      active: true,
    },
  ];

  // open navigation section
  disable = false;

  numberF = 0;

  //location UIRL

  urladdress = '';
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(
        // Filtrujemy, aby reagować tylko na zakończoną nawigację
        filter((event) => event instanceof NavigationEnd),
      )
      // @ts-ignore
      .subscribe((event: NavigationEnd) => {
        // Ustawiamy bieżący URL
        this.urladdress = event.urlAfterRedirects;
      });
  }

  //scroling to up

  @HostListener('window:scroll', [])
  onWindowScroll = () => {
    this.numberF =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (this.numberF >= 100) {
      this.disable = true;
    } else {
      this.disable = false;
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    window.location.hash = '';
  };

  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    window.location.hash = `#${elementId}`;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top; // Pozycja elementu względem okna przeglądarki
      const offsetPosition =
        elementPosition +
        window.pageYOffset -
        (window.innerHeight / 3 - element.clientHeight / 3); // Środek ekranu z
      // uwzględnieniem wysokości elementu

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth', // Płynne przewijanie
      });
    }
  }
}
