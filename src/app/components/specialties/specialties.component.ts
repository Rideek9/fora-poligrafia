import { Component } from '@angular/core';
import { NavigationComponent } from '../../elements/navigation/navigation.component';

@Component({
  selector: 'app-specialties',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './specialties.component.html',
  styleUrl: './specialties.component.sass',
})
export class SpecialtiesComponent {
  activeElement = 'znakowanie';

  navigationSpecialties = [
    {
      name: 'znakowanie',
    },
    {
      name: 'reklama',
    },
    {
      name: 'grafika',
    },
    {
      name: 'branding',
    },
  ];

  //change activeElement emiter
  changeElement(data: string) {
    this.activeElement = data;
  }
}
