import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationComponent } from '../../elements/navigation/navigation.component';
import { SpecContentComponent } from '../../elements/spec-content/spec-content.component';
import { data } from '../../../../public/datas/specData';
import { ButtonActionComponent } from '../../elements/button-action/button-action.component';

@Component({
  selector: 'app-specialties',
  standalone: true,
  imports: [NavigationComponent, SpecContentComponent, ButtonActionComponent],
  templateUrl: './specialties.component.html',
  styleUrl: './specialties.component.sass',
})
export class SpecialtiesComponent implements OnInit {
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

  contentSpecjalist: any;

  ngOnInit(): void {
    this.contentSpecjalist = data.filter((spec) => {
      return spec.specialization === this.activeElement;
    });
  }

  //change activeElement emiter
  changeElement(item: string) {
    this.activeElement = item;
    this.contentSpecjalist = data.filter((spec) => {
      return spec.specialization === this.activeElement;
    });
  }
}
