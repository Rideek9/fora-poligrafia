import { Component, Input } from '@angular/core';
import { ButtonActionComponent } from '../button-action/button-action.component';
import { GlobalVariableService } from '../../service/global-variable.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-spec-content',
  standalone: true,
  imports: [ButtonActionComponent, RouterLink],
  templateUrl: './spec-content.component.html',
  styleUrl: './spec-content.component.sass',
})
export class SpecContentComponent {
  @Input() data: any | undefined;
  @Input() imgURL: any | undefined;

  activePopup: boolean = false;
  showElement: any = '';
  showActivData: any;

  constructor(private globalVariable: GlobalVariableService) {}

  openPopUP(index: any, id: string): void {
    this.showElement = index;

    this.showActivData = this.data.filter((item: any) => {
      return item.name === this.showElement;
    });
    this.globalVariable.takeIDElement(id);

    // const elementStart = document.getElementsByClassName('specialtiesWrapper');
    // window.scrollTo({
    //   top: elementStart[0].clientHeight + 100,
    // });

    this.globalVariable.seeMorePopap(index);
    document.body.style.overflow = 'hidden';
  }

  // closePopUp() {
  //   this.activePopup = false;
  // }
}
