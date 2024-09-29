import { Component } from '@angular/core';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { HeaderComponent } from '../../components/header/header.component';
import { PhotoComponent } from '../../components/photo/photo.component';
import { SpecialtiesComponent } from '../../components/specialties/specialties.component';
import { TrustUsComponent } from '../../components/trust-us/trust-us.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutUsComponent,
    HeaderComponent,
    PhotoComponent,
    SpecialtiesComponent,
    TrustUsComponent,
    NavigationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {}
