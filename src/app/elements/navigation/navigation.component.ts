import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.sass',
})
export class NavigationComponent {
  @Input() dataNavigation: any = [];
  @Input() activeElement: string | undefined;

  @Output() nameElement: EventEmitter<string> = new EventEmitter();

  changeElement(item: string) {
    const data = item;
    this.nameElement.emit(data);
  }
}
