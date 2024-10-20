import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MetaTagService {
  constructor(
    public router: ActivatedRoute,
    public meta: Meta,
    public title: Title,
  ) {}

  getTitle(title: string): void {
    this.router.data.subscribe((data) => {
      this.title.setTitle(title);
    });
  }

  getDescription(desc: string): void {
    this.router.data.subscribe((data) => {
      this.meta.updateTag({ name: 'description', content: desc });
    });
  }
  getKeywords(keyword: string): void {
    this.router.data.subscribe((data) => {
      this.meta.updateTag({ name: 'keywords', content: keyword });
    });
  }
}
