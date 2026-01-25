import { Routes } from '@angular/router';
import { AtasListComponent } from '../pages/atas/atas-list/atas-list.component';
import { WorkshopDetailComponent } from '../pages/workshop-detail/workshop-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'atas', pathMatch: 'full' },
  { path: 'atas', component: AtasListComponent },
  { path: 'atas/:id', component: WorkshopDetailComponent }
];
