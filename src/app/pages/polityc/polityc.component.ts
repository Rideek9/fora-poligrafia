import { Component } from '@angular/core';
import { PrivatePoliticComponent } from '../../elements/private-politic/private-politic.component';

@Component({
  selector: 'app-polityc',
  standalone: true,
  imports: [PrivatePoliticComponent],
  templateUrl: './polityc.component.html',
  styleUrl: './polityc.component.sass',
})
export class PolitycComponent {}
