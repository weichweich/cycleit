import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BicycleAddPage } from './bicycle-add.page';

const routes: Routes = [
  {
    path: '',
    component: BicycleAddPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BicycleAddPage]
})
export class BicycleAddPageModule {}
