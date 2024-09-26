import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.sass',
})
export class AboutUsComponent implements OnInit {
  // sort information from piority
  elementActive: any;
  //fetchDataSerwer
  urlAddres: string = 'http://admin.fora-poligrafia.pl/api';
  dataElementNew: any;
  // sortInformation = this.information.sort((a, b) => a.piority - b.piority);
  sortInformation: any;

  constructor(private http: HttpClient) {}

  sortItem(items: any) {
    return items.sort((a: any, b: any) => a.piority - b.piority);
  }

  getData() {
    this.http.get(`${this.urlAddres}/about-uses`).subscribe((res) => {
      this.dataElementNew = res;
      this.dataElementNew = this.dataElementNew.data;
      this.sortInformation = this.sortItem(this.dataElementNew);
      this.elementActive =
        this.sortInformation[Math.floor(this.sortInformation.length / 3)].name;
    });
  }

  //draw active element on the run site

  ngOnInit() {
    this.getData();
  }

  // function to change active element
  Activated = (testElemetn: any) => {
    this.elementActive = testElemetn;
  };
}
