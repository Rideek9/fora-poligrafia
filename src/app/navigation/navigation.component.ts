import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.sass',
})
export class NavigationComponent {
  navigation = [
    {
      name: 'o nas',
      url: 'about',
      active: true,
    },
    {
      name: 'zaufali nam',
      url: 'trustUs',
      active: true,
    },
  ];

  disable = false;

  numberF = 0;

  @HostListener('window:scroll', [])
  onWindowScroll = () => {
    this.numberF =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    console.log(this.disable);
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
  };
}
