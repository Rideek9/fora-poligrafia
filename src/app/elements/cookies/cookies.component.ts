import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.sass',
})
export class CookiesComponent implements OnInit {
  cookiesAccepted: boolean = false;
  pathName: string = '';
  hidePopup: boolean = false;

  ngOnInit(): void {
    this.cookiesAccepted = this.getCookie('analytics_consent') === 'true';
    if (this.cookiesAccepted) {
      this.loadGoogleAnalytics();
      // Jeśli zgoda jest już udzielona, ładujemy GA
    }
    if (this.getCookie('analytics_consent') === 'false') {
      this.cookiesAccepted = true;
    }
    this.pathName = window.location.pathname.slice(1);
  }

  acceptCookies() {
    this.setCookie('analytics_consent', 'true', 30); // Zapisanie zgody na 365 dni
    this.cookiesAccepted = true;
    this.loadGoogleAnalytics(); // Ładujemy Google Analytics po zaakceptowaniu zgody
    this.activeScroll();
    window.location.replace('/');
  }

  declineCookies() {
    this.setCookie('analytics_consent', 'false', 1); // Użytkownik odrzucił cookies
    this.cookiesAccepted = true;
    // Opcjonalnie: usunięcie istniejących cookies związanych z GA
    this.deleteCookie('_ga');
    this.deleteCookie('_gid');
    this.deleteCookie('_gat');
    this.activeScroll();
    window.location.replace('/');
  }

  loadGoogleAnalytics() {
    const gtagScript = document.createElement('script');
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=G-KL02JT391H`;
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    const gtagScript2 = document.createElement('script');
    gtagScript2.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag() {dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config','G-KL02JT391H' );
    `;
    document.head.appendChild(gtagScript2);
  }

  setCookie(name: string, value: string, days: number) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + d.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }

  getCookie(name: string) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  deleteCookie(name: string) {
    document.cookie = name + '=; Max-Age=-99999999;';
  }

  blockScroll() {
    document.body.style.overflowY = 'hidden';
  }

  activeScroll() {
    document.body.style.overflowY = 'auto';
  }

  hideElement() {
    this.hidePopup = !this.hidePopup;
  }
}
