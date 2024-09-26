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

  urlAddres = 'https://admin.fora-poligrafia.pl';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(this.urlAddres + '/api/trust-uses?populate=*')
      .subscribe((data: any) => {
        this.dataElemets = data.data;
        this.takeRandomElement();
        this.takeElement(this.aciveElement);
      });
  }

  takeElement(item: any): void {
    this.aciveElement = item;
    this.dataComments = this.dataElemets.filter(
      (elem: any) => elem.name === item,
    );
  }

  takeRandomElement() {
    this.aciveElement = this.dataElemets[Math.floor(Math.random() * 4)].name;
  }
}
