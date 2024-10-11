import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PolitycComponent } from './pages/polityc/polityc.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'polityka-prywatnosci', component: PolitycComponent },
  { path: '**', component: NotFoundComponent },
];
