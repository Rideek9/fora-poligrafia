import { Component, OnInit } from '@angular/core';
import { PortoflioService } from '../../service/portoflio.service';
import { PortfolioItemComponent } from '../../elements/portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioItemComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.sass',
})
export class PortfolioComponent implements OnInit {
  element: any;
  SectionElement: [] = [];
  activeSection: string = '';

  constructor(private data: PortoflioService) {}

  ngOnInit() {
    this.data.takeAllData();
    this.getDataElement();
  }

  getDataElement() {
    this.data.dataElement$.subscribe((data) => {}),
      this.data.dataElement$.subscribe((items) => {
        this.element = items;
        this.element = this.element.data;
        if (this.element !== undefined) {
          this.element.map((item: any) => {
            // @ts-ignore
            if (!this.SectionElement.includes(item.sectionName)) {
              // @ts-ignore
              this.SectionElement.push(item.sectionName);
            }
          });
        }
      });
  }

  changeSection(section: string) {
    if (this.activeSection !== section) {
      this.activeSection = section;
      return;
    }
    this.activeSection = '';
  }
}
