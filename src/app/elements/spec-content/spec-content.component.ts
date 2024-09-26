import { Component, Input } from '@angular/core';
import { ButtonActionComponent } from '../button-action/button-action.component';

@Component({
  selector: 'app-spec-content',
  standalone: true,
  imports: [ButtonActionComponent],
  templateUrl: './spec-content.component.html',
  styleUrl: './spec-content.component.sass',
})
export class SpecContentComponent {
  @Input() data: any | undefined;
  @Input() imgURL: any | undefined;
}
