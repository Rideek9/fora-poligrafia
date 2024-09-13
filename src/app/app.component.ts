import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntegrationComponentComponent } from './integration-component/integration-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntegrationComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'client';
}
