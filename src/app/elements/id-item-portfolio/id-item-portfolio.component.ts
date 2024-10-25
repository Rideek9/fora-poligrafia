import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PortoflioService } from '../../service/portoflio.service';
import { MetaTagService } from '../../service/meta-tag.service';

@Component({
  selector: 'app-id-item-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './id-item-portfolio.component.html',
  styleUrl: './id-item-portfolio.component.sass',
  encapsulation: ViewEncapsulation.None,
})
export class IdItemPortfolioComponent implements OnInit {
  pathName!: string | null;
  dataItem!: any;
  APIAddress!: string;
  activeIndexElement: number = 0;
  markDonwElement: any;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private itemDB: PortoflioService,
    private router: Router,
    private meta: MetaTagService,
  ) {}

  ngOnInit() {
    this.APIAddress = this.itemDB.serwerPath;
    this.route.paramMap.subscribe((params) => {
      this.pathName = params.get('id');
    });
    this.dataItem = this.itemDB.takItemData(this.pathName);
    this.dataItem.subscribe(
      (data: any) => {
        this.dataItem = data.data;
        this.markDonwElement = this.markDownToHtml(data.data.description);
        document.body.style.overflow = 'hidden';
        this.meta.getTitle(`Fora Poligrafia - ${this.dataItem.CompanyName}`);
        if (this.dataItem.metaDescription) {
          this.meta.getDescription(this.dataItem.metaDescription);
        }
        if (this.dataItem.metaKeywords) {
          this.meta.getKeywords(this.dataItem.metaKeywords);
        }
      },
      (error: any) => {
        this.router.navigate(['/portfolio']);
      },
    );
  }

  goBack(): void {
    location.href = '/portfolio';
    document.body.style.overflow = 'scroll';
  }

  changeIndex(idnex: any) {
    this.activeIndexElement = idnex;
  }

  markDownToHtml(markdown: string) {
    if (markdown === null) {
      return;
    }
    markdown = markdown.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
    markdown = markdown.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
    markdown = markdown.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    markdown = markdown.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    markdown = markdown.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    markdown = markdown.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Pogrubienie **text**
    markdown = markdown.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>');

    // Kursywa *text*
    markdown = markdown.replace(/\*(.*)\*/gim, '<i>$1</i>');

    // Linki [text](link)
    markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');

    // Nowe linie
    markdown = markdown.replace(/\n$/gim, '<br/><br/>');

    // Listy nienumerowane - przekształcanie elementów w <li> i grupowanie w jednym <ul>
    markdown = markdown.replace(/^\* (.*$)/gim, '<li>$1</li>');
    markdown = markdown.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');
    markdown = markdown.replace(/<\/ul>\s*<ul>/gim, ''); // Usunięcie powielonych <ul>

    // Listy numerowane - przekształcanie elementów w <li> i grupowanie w jednym <ol>
    // Numerowanie zostaje usunięte z treści, bo HTML automatycznie numeruje elementy <li> w <ol>
    markdown = markdown.replace(/^[0-9]+\. (.*$)/gim, '<li>$1</li>');
    markdown = markdown.replace(/(<li>.*<\/li>)/gim, '<ol>$1</ol>');
    markdown = markdown.replace(/<\/ol>\s*<ol>/gim, ''); // Usunięcie powielonych <ol>

    // Linie oddzielające
    markdown = markdown.replace(/^-{3,}$/gim, '<hr />');

    // Zamienianie bloków tekstu na <p>
    // Wyszukiwanie tekstu, który nie jest nagłówkiem, listą, ani innym elementem
    markdown = markdown.replace(
      /(?:^|\n)([^\n]+)(?:\n|$)/gim,
      function (match, p1) {
        // Ignorowanie tagów HTML, list, nagłówków itd.
        if (/^<.*>/.test(p1.trim())) {
          return match; // Ignoruje fragmenty, które już są HTML-em
        }
        return `<p>${p1.trim()}</p>\n`; // Otacza każdy blok tekstu w <p>
      },
    );

    return markdown.trim(); // Zwraca przetworzony HTML
  }
}
