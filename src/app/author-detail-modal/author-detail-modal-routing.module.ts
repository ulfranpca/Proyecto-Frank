import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorDetailModalPage } from './author-detail-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AuthorDetailModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorDetailModalPageRoutingModule {}
