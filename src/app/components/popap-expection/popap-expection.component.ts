import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalVariableService } from '../../service/global-variable.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popap-expection',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './popap-expection.component.html',
  styleUrl: './popap-expection.component.sass',
  encapsulation: ViewEncapsulation.None,
})
export class PopapExpectionComponent implements OnInit {
  popapGlobalActive: boolean = false;
  elemetPopup: string = '';
  dataPopup: any;

  urlAddres = 'https://admin.fora-poligrafia.pl';
  addresPhoto: string = '';

  constructor(private globalValue: GlobalVariableService) {}

  async ngOnInit() {
    this.globalValue.activePOP$.subscribe((value) => {
      this.popapGlobalActive = value;
    });
    this.globalValue.showMoreElementText$.subscribe((text) => {
      this.elemetPopup = text;
    });
    this.globalValue.dataPopup$.subscribe((data) => {
      this.dataPopup = data;
      this.addresPhoto = this.urlAddres + this.dataPopup.data?.image[0].url;
    });
  }

  closePopap() {
    this.globalValue.closePopap(false);
    this.globalValue.cleanPopapData();
    document.body.style.overflow = 'auto';
  }
}
