import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ButtonActionComponent } from '../button-action/button-action.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trust-us-content',
  standalone: true,
  imports: [ButtonActionComponent],
  templateUrl: './trust-us-content.component.html',
  styleUrl: './trust-us-content.component.sass',
})
export class TrustUsContentComponent implements OnInit {
  @Input() dataComent!: any;
  @Input() adresURL!: any;

  dataElemets: any;
  dataComments: any;
  aciveElement: any;
  iconCompany: any = [];
  indexElement: number = 0;
  gridSize: number = 4;
  howMuchIndex: any = [];
  seeIcon: any = [];

  isPauseInterwal = false;
  intervalWorking: any;
  timeToChangeElemetn: number = 8000;

  urlAddres = 'https://admin.fora-poligrafia.pl';
  constructor(private http: HttpClient) {}

  // Hostowanie i sprawdzanie na żywo sszerokości ekranu - do sprawdzania zmian komponentu
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.changeGrid();
    // this.howMuchGrid(this.gridSize);
  }

  ngOnInit(): void {
    this.http
      .get(this.urlAddres + '/api/trust-uses?populate=*')
      .subscribe((data: any) => {
        this.dataElemets = data.data;
        this.takeRandomElement();
        this.takeElement(this.aciveElement);
        this.takeIconElement();
        this.changeGrid();
        this.howMuchGrid(this.gridSize);
      });
    this.changeIndexIcon();
  }

  //zmiana obiektu
  takeElement(item: any): void {
    this.aciveElement = item;
    this.dataComments = this.dataElemets.filter(
      (elem: any) => elem.name === item,
    );
    this.indexElement = 0;
  }

  //wybranie randomowego obiegku do wyświetlania
  takeRandomElement() {
    this.aciveElement =
      this.dataElemets[Math.floor(Math.random() * this.seeIcon.length)].name;
  }

  //wygenerowanie ikon bez duplikatów
  takeIconElement() {
    this.dataElemets.map((elem: any) => {
      if (this.iconCompany.find((item: any) => item.name === elem.name)) {
        return;
      }
      this.iconCompany.push({
        name: elem.name,
        urlAddres: elem.image.url,
        sizeLogo: elem.sizeLogo,
      });
    });
  }

  //zamiana komentarza
  changeIndexElement(index: number) {
    this.indexElement = index;
  }

  //sprawdzanie ilości elementów w trust us w zależności od szerokości ekranu
  changeGrid() {
    const size = window.innerWidth;

    if (size >= 900) {
      this.gridSize = 4;
    } else if (size >= 800) {
      this.gridSize = 3;
    } else if (size >= 600) {
      this.gridSize = 2;
    } else {
      this.gridSize = 1;
    }
  }

  howMuchGrid(size: any) {
    this.howMuchIndex = [];
    for (let i = 0; i < size; i++) {
      this.howMuchIndex.push(i);
    }
    for (let i = 0; i < this.howMuchIndex.length; i++) {
      this.seeIcon.push(this.iconCompany[this.howMuchIndex[i]]);
    }
  }

  changeIndexIcon() {
    this.intervalWorking = setInterval(() => {
      if (this.howMuchIndex.length === this.iconCompany.length) {
        return;
      }

      const oldChange = this.howMuchIndex;

      //zmiana elementów
      for (let i = 0; i < this.howMuchIndex.length; i++) {
        if (oldChange[i] === this.iconCompany.length - 1) {
          oldChange[i] = -1;
        }
        oldChange[i] += 1;
      }
      this.howMuchIndex = oldChange;

      this.seeIcon = [];
      for (let i = 0; i < this.howMuchIndex.length; i++) {
        this.seeIcon.push(this.iconCompany[this.howMuchIndex[i]]);
      }
      this.aciveElement = this.seeIcon[0].name;

      this.takeElement(this.aciveElement);
      console.log(this.dataComments);
    }, this.timeToChangeElemetn);
  }

  //stop change elements function.
  interwalStop() {
    if (this.isPauseInterwal) {
      return;
    }
    this.isPauseInterwal = true;
    clearInterval(this.intervalWorking);
  }

  startInterval() {
    if (!this.isPauseInterwal) {
      return;
    }
    this.isPauseInterwal = false;
    this.changeIndexIcon();
  }
}
