import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntegrationComponentComponent } from './integration-component/integration-component.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutUsComponent } from './about-us/about-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IntegrationComponentComponent,
    HeaderComponent,
    NavigationComponent,
    AboutUsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {}
