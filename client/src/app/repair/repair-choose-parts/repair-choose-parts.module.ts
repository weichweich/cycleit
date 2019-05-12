import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RepairChoosePartsPage } from './repair-choose-parts.page';

const routes: Routes = [
  {
    path: '',
    component: RepairChoosePartsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RepairChoosePartsPage]
})
export class RepairChoosePartsPageModule {}
