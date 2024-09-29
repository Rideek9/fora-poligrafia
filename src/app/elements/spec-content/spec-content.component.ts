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

  activePopup: boolean = false;
  showElement: any = '';
  showActivData: any;

  openPopUP(index: any) {
    this.activePopup = true;
    this.showElement = index;

    this.showActivData = this.data.filter((item: any) => {
      return item.name === this.showElement;
    });

    const elementStart = document.getElementsByClassName('specialtiesWrapper');
    window.scrollTo({
      top: elementStart[0].clientHeight + 100,
    });
  }

  closePopUp() {
    this.activePopup = false;
  }
}
