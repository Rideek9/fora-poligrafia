import { Component, OnInit } from '@angular/core';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { MetaTagService } from '../../service/meta-tag.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [PortfolioComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.sass',
})
export class CatalogComponent implements OnInit {
  constructor(private meta: MetaTagService) {}

  ngOnInit(): void {
    this.meta.getTitle('Fora Poligrafia - Portfolio');
  }
}
