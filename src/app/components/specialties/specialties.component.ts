import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationComponent } from '../../elements/navigation/navigation.component';
import { SpecContentComponent } from '../../elements/spec-content/spec-content.component';
import { data } from '../../../../public/datas/specData';
import { ButtonActionComponent } from '../../elements/button-action/button-action.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-specialties',
  standalone: true,
  imports: [NavigationComponent, SpecContentComponent, ButtonActionComponent],
  templateUrl: './specialties.component.html',
  styleUrl: './specialties.component.sass',
})
export class SpecialtiesComponent implements OnInit {
  activeElement: any;
  navigationSpecialties = [
    {
      name: 'znakowanie',
    },
    {
      name: 'reklama',
    },
    {
      name: 'grafika',
    },
    {
      name: 'branding',
    },
  ];
  specjalisationList: any;
  listEement: any = [];

  contentSpecjalist: any;

  //fetchData
  urlAPI = 'https://admin.fora-poligrafia.pl/api';
  imgAPI = 'https://admin.fora-poligrafia.pl';

  constructor(private http: HttpClient) {}

  getDataElement() {
    this.http
      .get(`${this.urlAPI}/menu-foras?populate=*`)
      .subscribe((daelement) => {
        this.specjalisationList = daelement;
        this.specjalisationList.data.map((item: any) => {
          if (!this.listEement.includes(item.sectionName)) {
            this.listEement.push(item.sectionName);
          }
        });
        this.activeElement = this.listEement[0];
        this.contentSpecjalist = this.specjalisationList.data.filter(
          (item: any) => {
            return item.sectionName === this.activeElement;
          },
        );
      });
  }

  ngOnInit(): void {
    this.getDataElement();
  }

  //change activeElement emiter
  changeElement(item: string) {
    this.activeElement = item;
    this.contentSpecjalist = this.specjalisationList.data.filter(
      (spec: any) => {
        return spec.sectionName === this.activeElement;
      },
    );
  }
}
