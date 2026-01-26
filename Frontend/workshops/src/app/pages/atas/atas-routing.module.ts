import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtasListComponent } from './atas-list/atas-list.component';
import { WorkshopDetailComponent } from '../workshop-detail/workshop-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AtasListComponent
  },
  {
    path: ':id',
    component: WorkshopDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtasRoutingModule {}
