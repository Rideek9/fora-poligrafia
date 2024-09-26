import { Component, Input, OnInit } from '@angular/core';
import { ButtonActionComponent } from '../button-action/button-action.component';
import { dataTrust } from '../../../../public/datas/trustData';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-trust-us-content',
  standalone: true,
  imports: [ButtonActionComponent, NgForOf],
  templateUrl: './trust-us-content.component.html',
  styleUrl: './trust-us-content.component.sass',
})
export class TrustUsContentComponent implements OnInit {
  @Input() dataComent!: any;

  DataElement = dataTrust;
  elementActive: string = '';
  dataComents: any = [];
  commentsLength: any;
  commentsChose: any = 0;
  elementicon: any = 0;

  ngOnInit(): void {
    this.elementActive =
      this.DataElement[
        Math.floor(Math.random() * this.DataElement.length)
      ].icon;
    this.changeComments();
  }

  ngAfterViewInit() {
    this.elementicon = document.getElementsByClassName('IconTrust').length;
    console.log(this.elementicon);
  }

  //funkcja zmieniania ikon
  changeElementActive = (item: string) => {
    this.elementActive = item;
    this.changeComments();
    this.commentsChose = 0;
  };

  //filtrowanie odpowiedniej ilości komentarzy
  changeComments = () => {
    const dataFunction = this.DataElement.filter(
      (item) => item.icon === this.elementActive,
    )[0].comments;

    this.commentsLength = dataFunction.length;
    this.dataComents = dataFunction;
  };

  //zmiana numeru komentarza
  changeNumberComent = (nub: number) => {
    this.commentsChose = nub;
    console.log(this.commentsChose);
  };

  //ile jest elementów Icon
}
