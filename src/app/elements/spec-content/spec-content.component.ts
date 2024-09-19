import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spec-content',
  standalone: true,
  imports: [],
  templateUrl: './spec-content.component.html',
  styleUrl: './spec-content.component.sass',
})
export class SpecContentComponent {
  @Input() data: any | undefined;
}
