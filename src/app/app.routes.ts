import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PolitycComponent } from './pages/polityc/polityc.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { IdItemPortfolioComponent } from './elements/id-item-portfolio/id-item-portfolio.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'polityka-prywatnosci',
    component: PolitycComponent,
  },
  { path: 'portfolio', component: CatalogComponent },
  {
    path: 'portfolio/:id',
    component: IdItemPortfolioComponent,
  },
  { path: '**', component: NotFoundComponent },
];
