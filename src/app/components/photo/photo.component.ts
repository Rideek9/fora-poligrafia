import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.sass',
})
export class PhotoComponent {
  dataImage = [
    { alt: 'some txt', url: 'image/HeaderFirstImg.jpg', center: false },
    { alt: 'some txt', url: 'image/HeaderFirstImg.jpg', center: false },
    { alt: 'some txt', url: 'image/HeaderFirstImg.jpg', center: true },
    { alt: 'some txt', url: 'image/HeaderFirstImg.jpg', center: false },
    { alt: 'some txt', url: 'image/HeaderFirstImg.jpg', center: false },
  ];
}
