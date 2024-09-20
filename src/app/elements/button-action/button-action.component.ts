import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-action',
  standalone: true,
  imports: [],
  templateUrl: './button-action.component.html',
  styleUrl: './button-action.component.sass',
})
export class ButtonActionComponent {
  @Input() actionButton: string | undefined;
  @Input() actionButtonText: string | undefined;
}
