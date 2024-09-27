import { Component, Input, OnInit } from '@angular/core';
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

  urlAddres = 'https://admin.fora-poligrafia.pl';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(this.urlAddres + '/api/trust-uses?populate=*')
      .subscribe((data: any) => {
        this.dataElemets = data.data;
        this.takeRandomElement();
        this.takeElement(this.aciveElement);
        this.takeIconElement();
      });
  }

  takeElement(item: any): void {
    this.aciveElement = item;
    this.dataComments = this.dataElemets.filter(
      (elem: any) => elem.name === item,
    );
    this.indexElement = 0;
  }

  takeRandomElement() {
    this.aciveElement = this.dataElemets[Math.floor(Math.random() * 4)].name;
  }

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
    console.log(this.dataElemets);
  }

  changeIndexElement(index: number) {
    this.indexElement = index;
  }
}
