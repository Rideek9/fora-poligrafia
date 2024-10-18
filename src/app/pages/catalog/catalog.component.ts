import { Component } from '@angular/core';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [PortfolioComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.sass',
})
export class CatalogComponent {}
