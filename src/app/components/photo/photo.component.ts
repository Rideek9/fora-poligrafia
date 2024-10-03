import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { GlobalVariableService } from '../../service/global-variable.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.sass',
})
export class PhotoComponent implements OnInit {
  data: {
    center: boolean;
    alt: string;
    url: string;
  }[] = [];

  dataPhoto: any;
  addresPage: string;

  constructor(
    private globalData: GlobalVariableService,
    private http: HttpClient,
  ) {
    this.data = this.globalData.imageSection;
    this.addresPage = this.globalData.urlAddres;
  }

  ngOnInit() {
    const data = this.http.get(
      'https://admin.fora-poligrafia.pl/api/photo-sections?populate=*',
    );
    data.subscribe((data: any) => {
      this.dataPhoto = data.data;
    });
  }
}
