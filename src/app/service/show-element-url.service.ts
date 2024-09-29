import { Injectable } from '@angular/core';

class Element_2 {}

@Injectable({
  providedIn: 'root',
})
export class ShowElementURLService {
  constructor() {}

  observeElement(element: Element_2, callback: () => void): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(<Element>element);
  }
}
