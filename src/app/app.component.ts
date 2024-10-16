import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntegrationComponentComponent } from './components/integration-component/integration-component.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PhotoComponent } from './components/photo/photo.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { TrustUsComponent } from './components/trust-us/trust-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopapExpectionComponent } from './components/popap-expection/popap-expection.component';
import { MobileNavivigationComponent } from './components/mobile-navivigation/mobile-navivigation.component';
import { PopupContactComponent } from './components/popup-contact/popup-contact.component';
import { CookiesComponent } from './elements/cookies/cookies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IntegrationComponentComponent,
    HeaderComponent,
    NavigationComponent,
    AboutUsComponent,
    PhotoComponent,
    SpecialtiesComponent,
    TrustUsComponent,
    FooterComponent,
    PopapExpectionComponent,
    MobileNavivigationComponent,
    PopupContactComponent,
    CookiesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {}
