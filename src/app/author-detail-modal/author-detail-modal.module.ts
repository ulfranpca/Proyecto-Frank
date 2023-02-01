import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorDetailModalPageRoutingModule } from './author-detail-modal-routing.module';

import { AuthorDetailModalPage } from './author-detail-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorDetailModalPageRoutingModule
  ],
  declarations: [AuthorDetailModalPage]
})
export class AuthorDetailModalPageModule {}
