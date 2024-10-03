import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { GlobalVariableService } from '../../service/global-variable.service';

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

  constructor(private globalData: GlobalVariableService) {
    this.data = this.globalData.imageSection;
  }

  ngOnInit() {}
}
